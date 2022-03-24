import {
  DEATH_KNIGHT_SPECS,
  DEMON_HUNTER_SPECS,
  DRUID_SPECS,
  HUNTER_SPECS,
  MAGE_SPECS,
  MONK_SPECS,
  PALADIN_SPECS,
  PRIEST_SPECS,
  ROGUE_SPECS,
  SHAMAN_SPECS,
  WARLOCK_SPECS,
  WARRIOR_SPECS,
} from './SPECS';

export enum CLASSES {
  DEATH_KNIGHT,
  DEMON_HUNTER,
  DRUID,
  HUNTER,
  MAGE,
  MONK,
  PALADIN,
  PRIEST,
  ROGUE,
  SHAMAN,
  WARLOCK,
  WARRIOR,
}

export function getClassBySpecId(specId: number) {
  if (DEATH_KNIGHT_SPECS.find((spec) => spec.id === specId)) {
    return CLASSES.DEATH_KNIGHT;
  }
  if (DEMON_HUNTER_SPECS.find((spec) => spec.id === specId)) {
    return CLASSES.DEMON_HUNTER;
  }
  if (DRUID_SPECS.find((spec) => spec.id === specId)) {
    return CLASSES.DRUID;
  }
  if (HUNTER_SPECS.find((spec) => spec.id === specId)) {
    return CLASSES.HUNTER;
  }
  if (MAGE_SPECS.find((spec) => spec.id === specId)) {
    return CLASSES.MAGE;
  }
  if (MONK_SPECS.find((spec) => spec.id === specId)) {
    return CLASSES.MONK;
  }
  if (PALADIN_SPECS.find((spec) => spec.id === specId)) {
    return CLASSES.PALADIN;
  }
  if (PRIEST_SPECS.find((spec) => spec.id === specId)) {
    return CLASSES.PRIEST;
  }
  if (ROGUE_SPECS.find((spec) => spec.id === specId)) {
    return CLASSES.ROGUE;
  }
  if (SHAMAN_SPECS.find((spec) => spec.id === specId)) {
    return CLASSES.SHAMAN;
  }
  if (WARLOCK_SPECS.find((spec) => spec.id === specId)) {
    return CLASSES.WARLOCK;
  }
  if (WARRIOR_SPECS.find((spec) => spec.id === specId)) {
    return CLASSES.WARRIOR;
  }
  //random non class number to avoid potentially returning undefined
  return Infinity;
}
