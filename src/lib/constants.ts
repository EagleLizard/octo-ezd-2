
import path from 'node:path';

const BASE_DIR = path.resolve(__dirname, '..', '..');
const test_data_dir_name = 'test-data';
const test_data_dir_path = [
  BASE_DIR,
  test_data_dir_name,
].join(path.sep);

export {
  BASE_DIR,
  test_data_dir_path,
};
