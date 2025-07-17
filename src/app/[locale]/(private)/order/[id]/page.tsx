import { OrderCardDetail } from '@/modules/order/order-card/order-card-detail/order-card-detail';

interface TPageProps {
   params: { id: string };
}

export default function OrderCardDetailPage({ params }: TPageProps) {
   return <OrderCardDetail params={params} />;
}
