export interface OneEvent {
  id: string;
  title: string;
  nbStars: number;
  imgUrl: string;
  bands: Array<Band>;
}

export interface Band {
  id: number;
  categoryId: number;
  name: string;
  memebers: Array<Member>;
}

export interface Member {
  id: number;
  name: string;
}