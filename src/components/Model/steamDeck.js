import {
  BoxGeometry,
  Color,
  CylinderGeometry,
  ExtrudeGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
  Shape,
  SphereGeometry,
  TorusGeometry,
} from 'three';

/**
 * A Steam Deck built from primitives, so it needs no .glb download.
 * Sizes are in millimetres. Proportions are stylised: the screen is larger
 * than on the real device so the project screenshot is the focus.
 *
 * Mesh names follow the .glb models: `Screen` gets the project texture.
 */
const WIDTH = 320;
const HEIGHT = 128;
const SCALE = 3.6 / WIDTH;

const BODY_DEPTH = 14;
const BODY_BEVEL = 5;

const SCREEN_WIDTH = 182;
const SCREEN_HEIGHT = SCREEN_WIDTH / 1.6; // 16:10, like the real panel
const BEZEL_PADDING = 4;

// Graphite body with darker controls, so the shape reads on dark backgrounds
const colors = {
  body: 0x4a4f58,
  grip: 0x3f434b,
  control: 0x1d1f23,
  rim: 0x6a707a,
  trackpad: 0x32363d,
  button: 0x9aa0aa,
  bezel: 0x050506,
};

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

const material = (color, roughness = 0.6, metalness = 0.1) =>
  new MeshStandardMaterial({ color: new Color(color), roughness, metalness });

const mesh = (geometry, name, color, { x = 0, y = 0, z = 0, roughness } = {}) => {
  const node = new Mesh(geometry, material(color, roughness));
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
  group.add(mesh(disc(15, 15, 1.5), 'StickBase', colors.control, { z: 0.75 }));
  group.add(mesh(disc(10, 11.5, 7), 'StickCap', colors.control, { z: 4.5 }));
  group.add(mesh(new TorusGeometry(9.5, 1.4, 12, 40), 'StickRim', colors.rim, { z: 8 }));
  group.position.set(x, y, 0);
  return group;
};

const dpad = (x, y) => {
  const group = new Group();
  group.add(mesh(new BoxGeometry(23, 7.5, 3), 'DpadH', colors.control, { z: 1.5 }));
  group.add(mesh(new BoxGeometry(7.5, 23, 3), 'DpadV', colors.control, { z: 1.5 }));
  group.position.set(x, y, 0);
  return group;
};

const faceButtons = (x, y) => {
  const group = new Group();
  const gap = 9.5;
  [
    [0, gap],
    [gap, 0],
    [0, -gap],
    [-gap, 0],
  ].forEach(([bx, by]) =>
    group.add(
      mesh(disc(4.4, 4.8, 3), 'FaceButton', colors.control, { x: bx, y: by, z: 1.5 })
    )
  );
  group.position.set(x, y, 0);
  return group;
};

const trackpad = (x, y) =>
  mesh(slab(30, 30, 6, 0.4, 0.8), 'Trackpad', colors.trackpad, { x, y, roughness: 0.3 });

const pill = (x, y, width, height) =>
  mesh(slab(width, height, height / 2 - 0.01, 1, 0.5), 'Button', colors.button, { x, y });

export const createSteamDeck = () => {
  const deck = new Group();

  // Front plate, front face at z = 0
  const body = slab(WIDTH, HEIGHT, 52, BODY_DEPTH, BODY_BEVEL);
  body.translate(0, 0, -(BODY_DEPTH + BODY_BEVEL));
  deck.add(mesh(body, 'Frame', colors.body, { roughness: 0.55 }));

  // Back grips
  [-1, 1].forEach(side => {
    const grip = mesh(new SphereGeometry(1, 40, 24), 'Grip', colors.grip, {
      x: side * 122,
      y: -14,
      z: -22,
    });
    grip.scale.set(38, 52, 22);
    deck.add(grip);
  });

  // Glossy glass around the panel
  deck.add(
    mesh(
      slab(
        SCREEN_WIDTH + BEZEL_PADDING * 2,
        SCREEN_HEIGHT + BEZEL_PADDING * 2,
        5,
        0.2,
        0.3
      ),
      'Bezel',
      colors.bezel,
      { roughness: 0.15 }
    )
  );

  // The panel is unlit so the screenshot shows at full brightness
  const screenGeometry = new PlaneGeometry(SCREEN_WIDTH, SCREEN_HEIGHT);
  // glTF style UVs (v = 0 at the top), so textures load with flipY = false
  const uv = screenGeometry.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setY(i, 1 - uv.getY(i));
  const screen = new Mesh(screenGeometry, new MeshBasicMaterial({ color: 0x111111 }));
  screen.name = 'Screen';
  screen.position.z = 0.6;
  deck.add(screen);

  // Left controls
  deck.add(dpad(-138, 30));
  deck.add(thumbstick(-110, 26));
  deck.add(trackpad(-126, -26));
  deck.add(pill(-108, 54, 7, 4)); // view
  deck.add(pill(-106, -52, 12, 5)); // steam

  // Right controls
  deck.add(faceButtons(138, 30));
  deck.add(thumbstick(110, 26));
  deck.add(trackpad(126, -26));
  deck.add(pill(108, 54, 7, 4)); // menu
  deck.add(pill(106, -52, 12, 5)); // quick access

  deck.scale.setScalar(SCALE);

  // Wrap so callers can move the outer group without losing the scale
  const scene = new Group();
  scene.add(deck);
  return scene;
};
