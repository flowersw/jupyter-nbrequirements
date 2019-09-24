export interface Requirements {
    python_packages: any
    requires: Requires
    sources: (SourcesEntity)[] | null;
    "dev-python_packages"?: any
}

export interface RequirementsLocked {
    _meta: Meta;
    default: any;
    develop: any;
}

export interface Meta {
    hash: Hash;
    requires: Requires;
    sources: (SourcesEntity)[] | null;
    "pipfile-spec"?: number;
}

export interface Hash {
    sha256: string;
}

export interface Requires {
    python_version: string;
}

export interface SourcesEntity {
    name: string;
    url: string;
    verify_ssl: boolean;
}