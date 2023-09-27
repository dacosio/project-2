export interface YuhwanGeneratedProps {
  data: any[] | undefined;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  subtitle: string;
  setSubtitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  handleOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleOnDelete: (id: string) => void;
}
