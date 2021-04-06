import { AlertController } from "@ionic/angular";

const alertController = new AlertController();

export const customAlert = async (header: string, subHeader: string, message: string) => {
    const alert = await alertController.create({
        cssClass: 'my-custom-class',
        header,
        subHeader,
        message,
        buttons: ['OK']
    });

    await alert.present();
}




