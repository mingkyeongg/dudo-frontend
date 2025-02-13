import { atom } from 'jotai';

export const confirmAtom = atom({
  message: '',
  description: '',
  isVisible: false,
  onConfirm: () => {},
  onCancel: () => {},
});
