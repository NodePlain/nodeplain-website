
export const WHO_WE_HELP_DATA: Record<string, any> = {
    "physiotherapy": {
        title: "Physiotherapy",
        isOverview: true,
        specialties: [
            {
                slug: "sports-msk",
                title: "Sports & MSK Physio",
                icon: "🏃",
                desc: "ACL, rotator cuffs, sports injuries. Fill junior columns with private patients who value expertise over price.",
                keyMetrics: ["$67 CPP", "50+ Patients/mo"]
            },
            {
                slug: "paediatric-ndis",
                title: "Paediatric & NDIS Physio",
                icon: "👶",
                desc: "Private pay families + NDIS. Build dual-pipeline system for steady revenue and values-aligned clinicians.",
                keyMetrics: ["High LTV", "Stable Revenue"]
            }
        ],
        hero: {
            headline: "The patient pipeline built for physio clinics that want to *scale*.",
            subheadline: "Stop relying on GP referrals. Build a direct-to-patient acquisition system that fills your junior columns and reduces NDIS dependency.",
            stats: [
                { label: "Cost Per Patient", value: "$67" },
                { label: "From $1k Spend", value: "15 New Patients" },
                { label: "Guarantee", value: "90-Day ROI" }
            ]
        },
        problems: [
            { title: "Price Shoppers", desc: "Paying $8+ CPC on Google Ads just to get calls asking 'do you bulk bill?'" },
            { title: "Low Rebooking", desc: "Patients come for 1 session and don't rebook. Your PVA is stuck at 3.5." },
            { title: "Staff Churn", desc: "You train physios for 2 years, then watch them leave to start their own clinic." }
        ],
        pipeline_context: "The 50-Patient Pipeline targets high-value private patients (ACL, back pain, sports injuries) who value your expertise, not just your price.",
        benefits: [
            { title: "Fill Junior Columns", desc: "Our system is designed to drive volume to your less experienced staff, freeing you up." },
            { title: "Reduce NDIS Reliance", desc: "Shift your revenue mix towards private paying musculoskeletal patients." },
            { title: "Recruitment Pipeline", desc: "We use the same system to attract top-tier physio talent to your clinic." }
        ],
        roi: {
            spend: "$2,000",
            cpp: "$67–$100",
            patients: "20–30",
            revenue: "$12,000–$36,000"
        }
    },
    "chiropractic": {
        title: "Chiropractic",
        hero: {
            headline: "Leads that actually show up — or we rebuild your funnel for *free*.",
            subheadline: "We don't just generate leads. We generate attended appointments. Guaranteed 70%+ show rates for spinal decompression and functional neurology.",
            stats: [
                { label: "Show Rate", value: "70%+" },
                { label: "ROI", value: "13x-40x" },
                { label: "Guarantee", value: "Show Rate" }
            ]
        },
        problems: [
            { title: "Leads That Ghost", desc: "You get 50 leads a month, but 25 of them never answer the phone." },
            { title: "Ad Bans", desc: "You've had ad accounts banned for using before/after X-rays. We know the rules." },
            { title: "Care Plan Drop-off", desc: "Patients quit after pain relief, before structural correction." }
        ],
        pipeline_context: "Our 'Speed-to-Lead' automation contacts leads within 60 seconds, drastically increasing your show rate.",
        benefits: [
            { title: "High-Value Cases", desc: "Target disc bulge, sciatica, and chronic cases that need care plans." },
            { title: "AHPRA Safe", desc: "We know how to market chiro compliance without losing conversion." },
            { title: "No-Show Prevention", desc: "Automated SMS reminders and confirmation sequences that work." }
        ],
        roi: {
            spend: "$2,000",
            cpp: "$100",
            patients: "20",
            revenue: "$40,000+"
        }
    },
    "osteopathy": {
        title: "Osteopathy",
        hero: {
            headline: "Stop losing patients to physios who rank above *you*.",
            subheadline: "The Visibility System captures 'back pain' searches and converts them into osteo patients. Educate your market and build trust.",
            stats: [
                { label: "Search Rank", value: "#1" },
                { label: "New Patients", value: "30+" },
                { label: "Burnout", value: "0%" }
            ]
        },
        problems: [
            { title: "Invisible Online", desc: "People search 'physio' even when they need osteo. You're missing 80% of traffic." },
            { title: "Manual Burnout", desc: "You're treating 40 hours a week because you're the only one who can convert." },
            { title: "Generic Competition", desc: "Competing with physios who claim to do 'holistic' treatment." }
        ],
        pipeline_context: "We position Osteopathy as the premium, root-cause solution for chronic pain, differentiating you from generic physio.",
        benefits: [
            { title: "Market Education", desc: "Content that explains WHAT osteo is, building trust before they book." },
            { title: "Rank for Symptoms", desc: "We target 'back pain', 'migraines', 'sciatica' - not just 'osteo'." },
            { title: "Value-Based Booking", desc: "Patients book because they want YOUR philosophy, not just a quick fix." }
        ],
        roi: {
            spend: "$1,500",
            cpp: "$40",
            patients: "35",
            revenue: "$25,000"
        }
    },
    "physiotherapy/sports-msk": {
        title: "Sports & MSK Physio",
        hero: {
            headline: "50+ new private patients a month for your sports physio clinic — *guaranteed*.",
            subheadline: "Dominate your local market. Fill your junior columns with ACLs, rotator cuffs, and sports injuries. Get off the tools and scale.",
            stats: [
                { label: "Cost Per Patient", value: "$67" },
                { label: "New Patients", value: "50+" },
                { label: "Guarantee", value: "Profitability" }
            ]
        },
        problems: [
            { title: "Agency Fatigue", desc: " Sick of agencies who don't know an ACL from an MCL." },
            { title: "Thin Margins", desc: "Rent and commissions eating 80% of revenue. You need volume." },
            { title: "Staff Retention", desc: "Juniors leaving because their columns aren't full." }
        ],
        pipeline_context: "The 50-Patient Pipeline is engineered for high-volume, high-retention sports caseloads.",
        benefits: [
            { title: "Condition Specific", desc: "Campaigns for ACL, Shoulder, Knee, Back - speaking their language." },
            { title: "Reactivation", desc: "Automated campaigns to bring old patients back for maintenance." },
            { title: "Google Domination", desc: "Own the top 3 spots for 'sports physio [suburb]'." }
        ],
        roi: {
            spend: "$2,000",
            cpp: "$75",
            patients: "25+",
            revenue: "$30,000+"
        }
    },
    "physiotherapy/paediatric-ndis": {
        title: "Paediatric & NDIS Physio",
        hero: {
            headline: "The families are searching. The clinicians are out there. We help you find *both*.",
            subheadline: "A dual-pipeline system: Private pay families for cashflow, and values-aligned clinicians for capacity.",
            stats: [
                { label: "Waitlist", value: "Managed" },
                { label: "Recruitment", value: "Solved" },
                { label: "NDIS", value: "Compliant" }
            ]
        },
        problems: [
            { title: "Recruitment Crisis", desc: "9-month waitlist but can't find a senior physio to hire." },
            { title: "NDIS Freeze", desc: "Pricing freeze is killing margins. You need efficient intake." },
            { title: "Unpaid Admin", desc: "Drowning in reports and non-billable hours." }
        ],
        pipeline_context: "We automate the intake process for NDIS participants and run 'values-first' recruitment campaigns.",
        benefits: [
            { title: "Private Pay Mix", desc: "Target Plagiocephaly and developmental delays for private cashflow." },
            { title: "Neuro-Affirming", desc: "Marketing that reflects your values and attracts the right families." },
            { title: "Clinician Hiring", desc: "Employer branding that pulls seniors out of the woodwork." }
        ],
        roi: {
            spend: "$2,000",
            cpp: "N/A",
            patients: "Key Hire",
            revenue: "$150k/yr"
        }
    }
};
