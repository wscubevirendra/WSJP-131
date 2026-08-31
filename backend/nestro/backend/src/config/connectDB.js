
async function connectDB() {
    try {
        const response = await mongoose.connect("mongodb://localhost:27017/wsjp131")

    } catch (error) {

    }
}