
export interface ModuleItem {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
}

export interface FlowItem {
  id: string;
  title: string;
  imageUrl: string;
  position: 'top' | 'mid-left' | 'mid-right' | 'bottom-left' | 'bottom-right';
}
