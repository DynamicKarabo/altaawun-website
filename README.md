# 🌟 AL-TAAWUN Website

## About
Official website for AL TAAWUN FI AL humanitarian organization - providing support and services to the community.

🌐 **Live Site:** [altaawunfial.org.za](https://altaawunfial.org.za)

## 🗄️ Database Integration

![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

### Donation Management System
Integrated **Supabase (PostgreSQL)** for robust donation tracking and management:

✅ **Features:**
- Real-time donation data storage
- Secure Row Level Security (RLS) policies
- Public insert/read access for transparency
- Payment status tracking (pending/completed/failed)
- Donor information management
- Message and metadata support

### Database Schema
```sql
donations table:
- id (UUID, Primary Key)
- created_at (Timestamp)
- donor_name (TEXT)
- email (TEXT)
- amount (DECIMAL)
- message (TEXT, optional)
- payment_status (TEXT)
- payment_id (TEXT, optional)
- metadata (JSONB)
```

### Tech Stack
- **Frontend:** Next.js 14 (App Router), React, TypeScript
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel
- **Payment:** PayFast Integration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Environment Variables
Create `.env.local` with:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### Installation
```bash
npm install
npm run dev
```

## 📊 Project Structure
```
app/
├── api/
│   └── donate/
│       └── route.ts          # Donation API endpoint
lib/
└── supabaseClient.ts         # Supabase client configuration
```

## 🔐 Security
- Environment variables for sensitive data
- Row Level Security (RLS) policies
- Secure API endpoints
- Payment gateway integration

---

**Built with ❤️ for the community**
