
    export type RemoteKeys = 'users/exports' | 'users/app';
    type PackageType<T> = T extends 'users/app' ? typeof import('users/app') :T extends 'users/exports' ? typeof import('users/exports') :any;