import { Truck, Package, CheckCircle } from 'lucide-react'
import { GetOrdersUseCase } from '@/core/application/usecases/get-orders.use-case';

// async function getOrders() {
//   await new Promise(resolve => setTimeout(resolve, 1000))
  
//   return [
//     { id: '1', product: 'Smartphone', status: 'shipped', date: '2023-05-15' },
//     { id: '2', product: 'Laptop', status: 'processing', date: '2023-05-16' },
//     { id: '3', product: 'Headphones', status: 'delivered', date: '2023-05-14' },
//     { id: '4', product: 'Smart Watch', status: 'processing', date: '2023-05-17' },
//     { id: '5', product: 'Tablet', status: 'shipped', date: '2023-05-15' },
//   ]
// }

export default async function OrderStatusList() {
  const orders = await new GetOrdersUseCase().execute();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">My Orders</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {orders.map((order) => (
              <li key={order.order_id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">
                      Order number: 
                      {order.order_id.toString().padStart(4, '0')}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      {order.status == 'Processing' && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">{order.status}</span>}
                      {order.status == 'Shipped' && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">{order.status}</span>}
                      {order.status == 'Delivered' && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{order.status}</span>}
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        {order.status === 'Processing' && <Package className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />}
                        {order.status === 'Shipped' && <Truck className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />}
                        {order.status === 'Delivered' && <CheckCircle className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />}
                        {order.status === 'Processing' && 'Processing'}
                        {order.status === 'Shipped' && 'Shipped'}
                        {order.status === 'Delivered' && 'Delivered'}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <p>
                        Fecha de orden: 21-11-2024
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}