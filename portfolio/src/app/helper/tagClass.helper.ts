import {Tag} from '../projects/projects';

export interface TagStyle {
  badgeClasses: string;
  label: string;
}

export class TagClassHelper {
  public static computeTagClasses(tags: Tag[]): TagStyle[] {
    return tags.map(tag => {
      switch (tag) {
        case Tag.ANGULAR: return {
          badgeClasses: 'text-xs px-2 py-1 rounded border border-red-800 text-red-400 bg-red-950',
          label: 'Angular'
        };
        case Tag.NODE: return {
          badgeClasses: 'text-xs px-2 py-1 rounded border border-green-800 text-green-400 bg-green-950',
          label: 'Node.js'
        };
        case Tag.SQL: return {
          badgeClasses: 'text-xs px-2 py-1 rounded border border-yellow-800 text-yellow-400 bg-yellow-950',
          label: 'SQL'
        };
        case Tag.REACT: return {
          badgeClasses: 'text-xs px-2 py-1 rounded border border-blue-800 text-blue-400 bg-blue-950',
          label: 'React'
        };
        case Tag.KONVA: return {
          badgeClasses: 'text-xs px-2 py-1 rounded border border-purple-800 text-purple-400 bg-purple-950',
          label: 'Konva'
        };
        case Tag.REACTNATIVE: return {
          badgeClasses: 'text-xs px-2 py-1 rounded border border-blue-800 text-blue-400 bg-blue-950',
          label: 'React Native'
        };
        case Tag.EXPO: return {
          badgeClasses: 'text-xs px-2 py-1 rounded border border-zinc-600 text-zinc-300 bg-zinc-900',
          label: 'Expo'
        };
        case Tag.BLE: return {
          badgeClasses: 'text-xs px-2 py-1 rounded border border-cyan-800 text-cyan-400 bg-cyan-950',
          label: 'BLE'
        };
        case Tag.HARDWARE: return {
          badgeClasses: 'text-xs px-2 py-1 rounded border border-orange-800 text-orange-400 bg-orange-950',
          label: 'Hardware'
        };
        default: return {
          badgeClasses: 'text-xs px-2 py-1 rounded border border-zinc-700 text-zinc-400 bg-zinc-900',
          label: tag
        };
      }
    });
  }
}
