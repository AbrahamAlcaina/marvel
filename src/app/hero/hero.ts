export interface Hero {
  id: string;
  name: string;
  comics: Item;
  series: Item;
  stories: Item;
  events: Item;
}

interface Item {
  avaible: string;
  collectionURI: string;
}
