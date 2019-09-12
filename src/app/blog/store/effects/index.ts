import { PostsEffects } from './posts.effects';
import { CommentsEffects } from './comments.effects';


export const effects: any[] = [PostsEffects, CommentsEffects];

export * from './posts.effects';
export * from './comments.effects';
