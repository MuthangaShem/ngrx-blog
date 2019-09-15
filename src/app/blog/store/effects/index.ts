import { PostsEffects } from './posts.effects';
import { CommentsEffects } from './comments.effects';
import { AuthEffects } from './auth.effects';


export const effects: any[] = [PostsEffects, CommentsEffects, AuthEffects];

export * from './posts.effects';
export * from './comments.effects';
export * from './auth.effects';
