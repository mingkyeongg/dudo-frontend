import { atom } from 'jotai';

export const alertAtom = atom({
  message: '',
  isVisible: false,
  onConfirm: () => {},
});

export const confirmAtom = atom({
  message: '',
  description: '',
  isVisible: false,
  onConfirm: () => {},
  onCancel: () => {},
});
