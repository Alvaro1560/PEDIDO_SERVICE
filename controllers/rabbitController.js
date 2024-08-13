import amqp from 'amqplib';

const rabbitMQUrl = 'amqp://guest:guest@localhost:5672';

export async function sendMessage(message) {

    let connection;
    let channel;

    try {
        // Conectar al servidor RabbitMQ
        connection = await amqp.connect(rabbitMQUrl);
        channel = await connection.createChannel();
        
        // Declarar la cola 'pedidos' (se crea si no existe)
        await channel.assertQueue('pedidos', { durable: true });

        // Enviar el mensaje a la cola 'pedidos'
        channel.sendToQueue('pedidos', Buffer.from(JSON.stringify(message)));

        console.log('Message sent:', message);

    } catch (error) {
        console.error('Error en sendMessage:', error.message);
        throw error; // Propaga el error para que pueda ser manejado por quien llame a esta función
    } finally {
        // Asegúrate de cerrar el canal y la conexión en el bloque finally
        if (channel) {
            await channel.close();
        }
        if (connection) {
            await connection.close();
        }
    }
}
