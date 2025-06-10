
    export type RemoteKeys = 'dashboard/exports' | 'dashboard/app';
    type PackageType<T> = T extends 'dashboard/app' ? typeof import('dashboard/app') :T extends 'dashboard/exports' ? typeof import('dashboard/exports') :any;