import { ToastController } from "@ionic/angular";

const toastController = new ToastController()

export const toast = async (message: string) => {
    const toast = await toastController.create({
      message,
      duration: 1000
    });
    toast.present();
}