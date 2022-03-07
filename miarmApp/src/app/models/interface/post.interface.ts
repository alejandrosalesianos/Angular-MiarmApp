export interface PostResponse {
    content:          Post[];
    pageable:         string;
    last:             boolean;
    totalPages:       number;
    totalElements:    number;
    size:             number;
    number:           number;
    sort:             Sort;
    first:            boolean;
    numberOfElements: number;
    empty:            boolean;
}

export interface Post {
    id:                  number;
    titulo:              string;
    contenido:           string;
    contenidoOriginal:   string;
    contenidoMultimedia: string;
    tipoPublicacion:     string;
    user:                string;
    avatarUser:          string;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}
