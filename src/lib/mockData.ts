import { Post } from "@/interfaces/post";

export const mockPosts: Post[] = [
  {
    id: 1,
    author: "Marie Curie",
    authorLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Marie_Curie_%281900%29.jpg/250px-Marie_Curie_%281900%29.jpg",
    content: "¡Hola mundo desde mi primera publicación! 👋",
    mediaType: "image/jpg",
    mediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Pierre_and_Marie_Curie.jpg/250px-Pierre_and_Marie_Curie.jpg",
    createdAt: new Date().toISOString(),
    comments: [
      {
        id: 1,
        author: "Alan Turing",
        authorLogo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Alan_turing_header.jpg/250px-Alan_turing_header.jpg",
        content: "¡Bienvenida, Marie! 🚀",
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: 2,
    author: "Grace Hopper",
    authorLogo:
      "https://upload.wikimedia.org/wikipedia/commons/3/37/Grace_Hopper_and_UNIVAC.jpg",
    content: "Compilando ideas 💡",
    mediaType: "image/jpg",
    mediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Grace_Hopper_and_UNIVAC.jpg/250px-Grace_Hopper_and_UNIVAC.jpg",
    createdAt: new Date().toISOString(),
    comments: [],
  },
];
