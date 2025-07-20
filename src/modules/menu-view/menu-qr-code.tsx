import { Button } from '@/_shared/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/_shared/components/ui/dialog';
import { Printer, QrCode } from 'lucide-react';
import QRCodeLib from 'qrcode';
import { useState } from 'react';
import QRCode from 'react-qr-code';

interface QRCodeModalProps {
   cardapioUrl: string;
}

export default function QRCodeModal({ cardapioUrl }: QRCodeModalProps) {
   const [open, setOpen] = useState(false);

   const handlePrint = async () => {
      try {
         const qrCodeDataURL = await QRCodeLib.toDataURL(cardapioUrl, {
            width: 200,
            margin: 2,
         });

         const printWindow = window.open('', '_blank');
         if (printWindow) {
            printWindow.document.write(`
            <html>
              <head>
                <title>QR Code - Cardápio</title>
                <style>
                  body {
                    margin: 0;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    font-family: Arial, sans-serif;
                  }
                  .qr-container {
                    text-align: center;
                    padding: 20px;
                    border: 2px solid #000;
                    border-radius: 10px;
                  }
                  h1 {
                    margin-bottom: 20px;
                    color: #333;
                  }
                  p {
                    margin-top: 20px;
                    color: #666;
                    font-size: 14px;
                  }
                  img {
                    display: block;
                    margin: 0 auto;
                  }
                </style>
              </head>
              <body>
                <div class="qr-container">
                  <h1>Cardápio Digital</h1>
                  <img src="${qrCodeDataURL}" alt="QR Code do Cardápio" />
                  <p>Escaneie o QR Code para acessar nosso cardápio</p>
                </div>
              </body>
            </html>
         `);
            printWindow.document.close();
            printWindow.focus();
            printWindow.print();
            printWindow.close();
         }
      } catch (error) {
         console.error('Erro ao gerar QR Code para impressão:', error);
      }
   };

   return (
      <Dialog
         open={open}
         onOpenChange={setOpen}
      >
         <DialogTrigger asChild>
            <Button
               variant='secondary'
               className='cursor-pointer'
            >
               <QrCode size={16} />
               QR Code
            </Button>
         </DialogTrigger>
         <DialogContent className='sm:max-w-sm flex flex-col items-center'>
            <DialogHeader>
               <DialogTitle className='text-xl'>QR Code do Cardápio</DialogTitle>
            </DialogHeader>
            <div id='qr-code-container'>
               <QRCode
                  className='mt-5'
                  size={200}
                  value={cardapioUrl}
               />
            </div>
            <div className='flex flex-col gap-2 items-center mt-2'>
               <p className='text-sm text-gray-500 text-center'>Escaneie o QR Code para acessar o cardápio.</p>
               <Button
                  onClick={handlePrint}
                  className='cursor-pointer'
               >
                  <Printer size={16} />
                  Imprimir QR Code
               </Button>
            </div>
         </DialogContent>
      </Dialog>
   );
}
