// Generated by https://quicktype.io

export interface LoginResponse {
    email:  string;
    nick:   string;
    avatar: string;
    perfil: string;
    token:  string;
    posts:  Post2[];
}

export interface Post2 {
    id:                  number;
    titulo:              string;
    contenido:           string;
    contenidoOriginal:   string;
    contenidoMultimedia: string;
    tipoPublicacion:     string;
    user:                string;
    avatarUser:          null;
}
