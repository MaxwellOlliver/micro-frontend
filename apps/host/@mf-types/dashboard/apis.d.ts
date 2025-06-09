
    export type RemoteKeys = 'dashboard/exports';
    type PackageType<T> = T extends 'dashboard/exports' ? typeof import('dashboard/exports') :any;