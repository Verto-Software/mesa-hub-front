export const formatPrice = (value: string): string => {
   const numericValue = value.replace(/\D/g, '');
   const formattedValue = (parseInt(numericValue) / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
   });
   return numericValue ? formattedValue : '';
};

export const parsePrice = (formattedPrice: string): number => {
   return parseFloat(formattedPrice.replace(/[R$\s.]/g, '').replace(',', '.')) || 0;
};
