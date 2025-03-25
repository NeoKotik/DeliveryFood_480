import { connect } from 'mongoose';

export const dbConnect = async () => {
    try {
        await connect(process.env.MONGO_URI!);
        console.log("success");
    } catch (error) {
        console.error("error connection", error);
        process.exit(1); // Остановит сервер, если MongoDB не подключился
    }
};
