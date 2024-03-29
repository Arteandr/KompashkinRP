export interface Item {
    name: string;
    uuid?: string;
    description: string;
    icon: string;
    quantity: number;
    weight: number;
    slot: number;
    hash?: string;
    data: { [key: string]: any };
}

export interface DroppedItem {
    item: Item;
    position: { x: number; y: number; z: number };
    gridSpace: number;
    dimension: number;
}