import { FreeCard } from './components/free-card';
import { PlansCard } from './components/plans-card';

const benefitPlans = [
   {
      title: 'Básico',
      description: 'Ideal para pequenas empresas',
      price: 49,
      period: 'mês',
      benefits: [
         'Até 10 comandas simultâneas',
         'Até 50 produtos no estoque',
         'Cadastro de até 5 fornecedores',
         '2 subconta',
         'Gestão de cardápio',
         'Suporte via WhatsApp em horário comercial',
      ],
      choose: 'Escolher plano',
   },
   {
      title: 'Profisional',
      description: 'Para restaurantes em expansão',
      price: 99,
      period: 'mês',
      benefits: [
         'Até 25 comandas simultâneas',
         'Até 100 produtos no estoque',
         'Cadastro de até 10 fornecedores',
         'Até 5 subcontas',
         'Gestão de cardápio',
         'Relatórios detalhados de vendas',
         'Suporte via WhatsApp em horário comercial',
      ],
      choose: 'Escolher plano',
      popular: true,
   },
   {
      title: 'Empresarial',
      description: 'Para grandes operações',
      price: 199,
      period: 'mês',
      benefits: [
         'Até 150 comandas',
         'Até 200 produtos no estoque',
         'Cadastro de até 20 fornecedores',
         'Até 15 subcontas',
         'Gestão de cardápio',
         'Relatórios detalhados de vendas',
         'Treinamentos online',
         'Suporte via WhatsApp VIP 24/7',
      ],
      choose: 'Escolher plano',
      popular: false,
   },
];

export function Plans() {
   return (
      <section className='flex flex-col items-center justify-center w-full py-6 px-4'>
         <h1 className='text-3xl font-bold text-gray-800 mt-4 text-center'>Escolha seu plano ideal</h1>
         <p className='text-lg text-gray-400 text-center'>
            Planos flexíveis para o seu restaurante crescer. Escolha o ideal para o seu momento.
         </p>

         <FreeCard />

         <div className='flex items-center flex-col gap-2 mt-10'>
            <h2 className='text-2xl font-bold text-gray-800 text-center'>
               Tudo o que seu restaurante precisa, em um só lugar.
            </h2>
            <p className='text-gray-400 text-center'>
               Transforme a gestão do seu restaurante com tecnologia que funciona de verdade. Menos papel, mais lucro,
               mais controle.
            </p>
         </div>

         <div className='flex flex-col lg:flex-row lg:gap-12'>
            {benefitPlans.map((planInfo, id) => (
               <PlansCard
                  key={id}
                  popular={planInfo.popular}
                  title={planInfo.title}
                  description={planInfo.description}
                  price={planInfo.price}
                  period={planInfo.period}
                  benefits={planInfo.benefits}
                  choose={planInfo.choose}
               />
            ))}
         </div>
      </section>
   );
}
