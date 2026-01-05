import FeedbackForm from "./components/FeedbackForm";
import ImageSlideshow from "./components/ImageSlideshow";
import TodoApp from "./components/TodoApp";

export default function App() {
  return (
    <div className="p-6 space-y-10 max-w-3xl mx-auto">
      <FeedbackForm />
      <ImageSlideshow />
      <TodoApp />
    </div>
  );
}
