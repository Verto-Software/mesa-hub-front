import { Card, CardDescription, CardHeader, CardTitle } from '@/_shared/components/ui/card';
import { Clock, Sparkles } from 'lucide-react';
import { PlansCard } from './plans-card';

const plansInfo = [
   {
      title: 'Básico',
      description: 'Ideal para pequenas empresas',
      price: 49,
      put: 'mês',
      benefits: ['Até 10 comandas simultâneas', 'Até 50 produtos no estoque', 'Cadastro de até 5 fornecedores', '2 subconta', 'Gestão de cardápio', 'Suporte via chat em horário comercial'],
      choose: 'Escolher plano',
   },
   {
      title: 'Profisional',
      description: 'Para restaurantes em expansão',
      price: 99,
      put: 'mês',
      benefits: [
         'Até 50 comandas simultâneas',
         'Até 100 produtos no estoque',
         'Cadastro de até 10 fornecedores',
         'Até 5 subcontas',
         'Gestão de cardápio',
         'Relatórios detalhados de vendas, estoque e desempenho',
         'Treinamentos online',
      ],
      choose: 'Escolher plano',
      popular: true,
   },
   {
      title: 'Empresarial',
      description: 'Para grandes operações',
      price: 199,
      put: 'mês',
      benefits: [
         'Comandas ilimitadas',
         'Produtos no estoque ilimitados',
         'Fornecedores ilimitados',
         'Subcontas ilimitadas',
         'Gestão de cardápio',
         'Relatórios detalhados de vendas, estoque e desempenho',
         'Treinamentos online',
         'Suporte VIP 24/7',
      ],
      choose: 'Escolher plano',
      popular: false,
   },
];

export function Plans() {
   return (
      <section className='flex flex-col items-center justify-center w-full py-6'>
         <h1 className='text-3xl font-bold text-gray-800 mt-4'>Escolha seu plano ideal</h1>
         <p className='text-lg text-gray-400'>Planos flexíveis para o seu restaurante crescer. Escolha o ideal para o seu momento.</p>

         <Card className='w-3/5 bg-emerald-50 broder border-emerald-200 mt-6'>
            <CardHeader className='flex items-center gap-4'>
               <div className='flex items-center flex-col gap-3'>
                  <Clock
                     size={16}
                     className='text-gray-500'
                  />
                  <Sparkles className='text-emerald-500' />
               </div>
               <div className='flex flex-col gap-3'>
                  <CardTitle className='flex items-center gap-4.5 text-gray-700'>Teste grátis por 7 dias!</CardTitle>
                  <CardDescription className='flex items-center gap-3 text-gray-700'>
                     Explore todas as funcionalidades sem compromisso. No final, escolha o plano perfeito pra sua operação.
                  </CardDescription>
               </div>
            </CardHeader>
         </Card>

         <div className='flex items-center flex-col gap-2 mt-10'>
            <h2 className='text-2xl font-bold text-gray-800'>Tudo o que seu restaurante precisa, em um só lugar.</h2>
            <p className='text-gray-400'>Transforme a gestão do seu restaurante com tecnologia que funciona de verdade. Menos papel, mais lucro, mais controle.</p>
         </div>

         <div className='flex gap-12'>
            {plansInfo.map((planInfo, id) => (
               <PlansCard
                  key={id}
                  popular={planInfo.popular}
                  title={planInfo.title}
                  description={planInfo.description}
                  price={planInfo.price}
                  put={planInfo.put}
                  benefits={planInfo.benefits}
                  choose={planInfo.choose}
               />
            ))}
         </div>
      </section>
   );
}
