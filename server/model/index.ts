const db = require('./../db/');

export const queryAllUniverses = async (): Promise<void> => {
  return await db.find({});
};

export const queryPresets = async (): Promise<void> => {
  return await db.find({ preset: true });
};

export const queryUserSaves = async (): Promise<void> => {
  return await db.find({ preset: false });
};

export const saveUniverse = async (universe: object): Promise<void> => {
  return await new db(universe).save();
};
