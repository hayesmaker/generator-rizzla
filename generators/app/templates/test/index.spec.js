import PixiLauncher from '../src/index';

test('instantiate Pixi Launcher without errors', () => {
  let pixiLauncher = new PixiLauncher();
  expect(pixiLauncher).not.toBeUndefined();
});