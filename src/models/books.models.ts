import mongoose,{Schema, models, model} from 'mongoose';

const booksSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    user: {
        title: Schema.Types.ObjectId
    }
}, {timestamps: true})

const Notes = models.Notes || model("Notes", booksSchema);
export default Notes;