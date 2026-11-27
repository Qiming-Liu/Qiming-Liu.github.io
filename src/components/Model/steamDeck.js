import {
  BoxGeometry,
  CylinderGeometry,
  ExtrudeGeometry,
  Group,
  Mesh,
  MeshStandardMaterial,
  PlaneGeometry,
  Shape,
  SphereGeometry,
  TorusGeometry,
} from 'three';

/**
 * A Steam Deck built from primitives, so it needs no .glb download.
 * Sizes are in millimetres (real device is about 298 x 117 mm) and scaled down
 * at the end to match the laptop model (~3.4 units wide).
 *
 * Mesh names follow the .glb models: `Screen` gets the project texture.
 */
const WIDTH = 298;
const HEIGHT = 117;
const SCALE = 3.4 / WIDTH;

const BODY_DEPTH = 14;
const BODY_BEVEL = 5;

const SCREEN_WIDTH = 151;
const SCREEN_HEIGHT = SCREEN_WIDTH / 1.6; // 16:10, like the real panel
const SCREEN_Y = 3;

const roundedRect = (width, height, radius) => {
  const x = -width / 2;
  const y = -height / 2;
  const shape = new Shape();
  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);
  return shape;
};

const material = () => new MeshStandardMaterial({ roughness: 0.7, metalness: 0 });

const mesh = (geometry, name, x = 0, y = 0, z = 0) => {
  const node = new Mesh(geometry, material());
  node.name = name;
  node.position.set(x, y, z);
  return node;
};

const slab = (width, height, radius, depth, bevel) =>
  new ExtrudeGeometry(roundedRect(width, height, radius), {
    depth,
    bevelEnabled: bevel > 0,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 4,
    curveSegments: 24,
  });

// Cylinder whose axis points at the viewer (+z)
const disc = (radiusTop, radiusBottom, height) =>
  new CylinderGeometry(radiusTop, radiusBottom, height, 40).rotateX(Math.PI / 2);

const thumbstick = (x, y) => {
  const group = new Group();
  group.add(mesh(disc(16, 16, 1.5), 'StickBase', 0, 0, 0.75));
  group.add(mesh(disc(10.5, 12, 7), 'StickCap', 0, 0, 4.5));
  group.add(mesh(new TorusGeometry(10, 1.4, 12, 40), 'StickRim', 0, 0, 8));
  group.position.set(x, y, 0);
  return group;
};

const dpad = (x, y) => {
  const group = new Group();
  group.add(mesh(new BoxGeometry(25, 8, 3), 'DpadH', 0, 0, 1.5));
  group.add(mesh(new BoxGeometry(8, 25, 3), 'DpadV', 0, 0, 1.5));
  group.position.set(x, y, 0);
  return group;
};

const faceButtons = (x, y) => {
  const group = new Group();
  const gap = 10;
  [
    [0, gap],
    [gap, 0],
    [0, -gap],
    [-gap, 0],
  ].forEach(([bx, by]) => group.add(mesh(disc(4.6, 5, 3), 'FaceButton', bx, by, 1.5)));
  group.position.set(x, y, 0);
  return group;
};

const trackpad = (x, y) => mesh(slab(30, 30, 6, 0.4, 0.8), 'Trackpad', x, y, 0);

const pill = (x, y, width, height) =>
  mesh(slab(width, height, height / 2 - 0.01, 1, 0.5), 'Button', x, y, 0);

export const createSteamDeck = () => {
  const deck = new Group();

  // Front plate, front face at z = 0
  const body = slab(WIDTH, HEIGHT, 48, BODY_DEPTH, BODY_BEVEL);
  body.translate(0, 0, -(BODY_DEPTH + BODY_BEVEL));
  deck.add(mesh(body, 'Frame'));

  // Back grips
  [-1, 1].forEach(side => {
    const grip = mesh(new SphereGeometry(1, 40, 24), 'Grip', side * 112, -14, -22);
    grip.scale.set(36, 48, 22);
    deck.add(grip);
  });

  // Glass around the panel, then the panel itself
  deck.add(mesh(slab(174, 104, 5, 0.2, 0.3), 'Bezel', 0, SCREEN_Y, 0));

  const screenGeometry = new PlaneGeometry(SCREEN_WIDTH, SCREEN_HEIGHT);
  // glTF style UVs (v = 0 at the top), so textures load with flipY = false
  const uv = screenGeometry.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setY(i, 1 - uv.getY(i));
  deck.add(mesh(screenGeometry, 'Screen', 0, SCREEN_Y, 0.6));

  // Left controls
  deck.add(dpad(-130, 28));
  deck.add(thumbstick(-102, 26));
  deck.add(trackpad(-114, -24));
  deck.add(pill(-93, 48, 7, 4)); // view
  deck.add(pill(-93, -48, 12, 5)); // steam

  // Right controls
  deck.add(faceButtons(130, 28));
  deck.add(thumbstick(102, 26));
  deck.add(trackpad(114, -24));
  deck.add(pill(93, 48, 7, 4)); // menu
  deck.add(pill(93, -48, 12, 5)); // quick access

  deck.scale.setScalar(SCALE);

  // Wrap so callers can move the outer group without losing the scale
  const scene = new Group();
  scene.add(deck);
  return scene;
};
