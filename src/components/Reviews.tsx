import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import { Star, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { 
  db, 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  serverTimestamp,
  Timestamp
} from "../firebase";

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: any;
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      // Minimal auth info for logging
      userId: "anonymous", // Or get from auth if needed
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

interface Review {
  id: string;
  authorName: string;
  rating: number;
  comment: string;
  createdAt: Timestamp;
  approved: boolean;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: ""
  });

  useEffect(() => {
    const q = query(
      collection(db, "reviews"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedReviews = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Review[];
      setReviews(fetchedReviews);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, "reviews");
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "reviews"), {
        authorName: formData.name,
        rating: formData.rating,
        comment: formData.comment,
        createdAt: serverTimestamp(),
        approved: true // Automatically approved
      });
      
      setFormData({ name: "", rating: 5, comment: "" });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, "reviews");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reviews" className="bg-black">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-4 block"
          >
            Client Feedback
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif mb-6 text-white"
          >
            What Our <span className="italic font-light text-brand-accent">Clients</span> Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-brand-muted"
          >
            Real stories from homeowners and businesses who have experienced the FEFE Clean difference.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Review Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 glass-card p-8 rounded-[32px] h-fit border-brand-accent/20"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
              <MessageSquare className="text-brand-accent" />
              Leave a Review
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-widest text-brand-accent opacity-80">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-brand-dark border border-brand-accent/20 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-accent transition-all outline-none text-white placeholder:text-white/20"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-widest text-brand-accent opacity-80">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className={`p-1 transition-all ${formData.rating >= star ? "text-brand-accent scale-110" : "text-white/20"}`}
                    >
                      <Star fill={formData.rating >= star ? "currentColor" : "none"} size={24} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-widest text-brand-accent opacity-80">Your Experience</label>
                <textarea
                  required
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  className="w-full bg-brand-dark border border-brand-accent/20 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-accent transition-all outline-none min-h-[120px] resize-none text-white placeholder:text-white/20"
                  placeholder="Tell us about our service..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : (
                  <>Submit Review <Send size={18} /></>
                )}
              </button>

              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 text-brand-accent font-medium justify-center mt-4"
                  >
                    <CheckCircle2 size={20} />
                    Review submitted! It is now live.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            {reviews.length === 0 ? (
              <div className="text-center py-20 bg-brand-dark rounded-[32px] border-2 border-dashed border-brand-accent/20">
                <p className="text-brand-muted italic">No reviews yet. Be the first to share your experience!</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {reviews.map((review, i) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-8 rounded-[32px] border border-brand-accent/10 hover:border-brand-accent/30 transition-all"
                  >
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          size={16} 
                          className={star <= review.rating ? "text-brand-accent" : "text-white/10"}
                          fill={star <= review.rating ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <p className="text-brand-muted italic mb-6 leading-relaxed">
                      "{review.comment}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent font-bold border border-brand-accent/30">
                        {review.authorName.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-white">{review.authorName}</p>
                        <p className="text-xs text-brand-muted">Verified Client</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
