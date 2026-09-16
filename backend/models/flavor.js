import mongoose from 'mongoose';

const flavorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  teluguName: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  badge: { type: String, default: 'Fresh' }
}, { timestamps: true });

export default mongoose.model('Flavor', flavorSchema);