"use client";

import FeatureCard from "@/components/FeatureCard";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import Link from "next/link";

export default function FeaturesPage() {
  const [open, setOpen] = useState<null | "repo" | "tagging" | "extraction" | "workflows">(null);

  return (
    <div className="space-y-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Features</h1>
        <p className="mt-3 text-black/70 dark:text-white/70">Explore WondeTech’s end-to-end capabilities across document management, learning, and AI-powered knowledge services.</p>
      </header>

      <section id="document-center" className="space-y-6">
        <h2 className="text-2xl font-semibold">Document Center</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard title="Unified Repository" description="Centralize company documents with versioning and access control." onLearnMore={() => setOpen("repo")} />
          <FeatureCard title="Smart Tagging" description="Auto-tag content with entities and topics for quick retrieval." onLearnMore={() => setOpen("tagging")} />
          <FeatureCard title="Knowledge Extraction" description="Convert PDFs, docs, and slides into structured, reusable knowledge." onLearnMore={() => setOpen("extraction")} />
          <FeatureCard title="Document Workflows" description="Review, approve, and publish with integrated workflows." onLearnMore={() => setOpen("workflows")} />
        </div>
      </section>

      <Modal open={open === "repo"} onClose={() => setOpen(null)} title="Unified Repository">
        <div className="space-y-4">
          <p className="text-black/80 dark:text-white/80">Your single source of truth for enterprise documents.</p>
          <p>The Unified Repository serves as the backbone of enterprise knowledge management, providing a centralized platform to store, manage, and retrieve both digital and scanned physical documents. It ensures all stakeholders—from field teams to document controllers—have secure access to the most current and relevant information.</p>
          <h4 className="font-semibold">Key Capabilities:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Centralized storage for PDFs, scanned drawings, Word/Excel files, and archive images</li>
            <li>Hierarchical folder tree structured by project, discipline, department, and document type</li>
            <li>Full-text indexing with support for Arabic, English, and multilingual archives</li>
            <li>Role-based permission layers: view-only, editor, uploader, controller</li>
            <li>Seamless integration with project handover processes and online document workflows</li>
            <li>Archive lifecycle status (e.g., active, under review, obsolete) visible at a glance</li>
          </ul>
          <h4 className="font-semibold">Business Value:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Eliminates information silos across teams and departments</li>
            <li>Ensures consistency and traceability in documentation across project phases</li>
            <li>Greatly reduces manual time spent searching, validating, or duplicating content</li>
          </ul>
          <div className="space-y-2 text-sm text-black/70 dark:text-white/70">
            <p>📸 [Placeholder for image: file tree + search preview]</p>
            <p>🎬 [Placeholder for demo: uploading + retrieval scenario]</p>
          </div>
          <div className="pt-2">
            <Link href="/features/unified-repository" className="inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">
              View Full Page →
            </Link>
          </div>
        </div>
      </Modal>

      <Modal open={open === "tagging"} onClose={() => setOpen(null)} title="Smart Tagging">
        <div className="space-y-4">
          <p className="text-black/80 dark:text-white/80">Automatically organize knowledge at scale with intelligent tagging.</p>
          <p>The Smart Tagging engine analyzes filenames, metadata, and OCR results to automatically classify documents based on rules, keywords, and organizational logic. Administrators can define custom tagging policies, while users benefit from dynamic filters and AI-assisted suggestions.</p>
          <h4 className="font-semibold">Key Capabilities:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Tag extraction from document codes (e.g. “ATPC-DS2-SIP-0004”)</li>
            <li>Mapping of fields like plant, originator, discipline, revision, doc type</li>
            <li>OCR-based tagging of scanned legacy documents</li>
            <li>Support for custom metadata schemas: region, asset, contractor, etc.</li>
            <li>Tag-driven filtering and advanced search refinement on frontend</li>
            <li>Admin interface to bulk assign/edit tags and manage rule logic</li>
          </ul>
          <h4 className="font-semibold">Business Value:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Significantly shortens time-to-find for critical files</li>
            <li>Prevents misfiling by enforcing standardized taxonomy</li>
            <li>Lays the foundation for semantic search and AI content recommendation</li>
          </ul>
          <div className="space-y-2 text-sm text-black/70 dark:text-white/70">
            <p>📸 [Placeholder for image: tag admin panel]</p>
            <p>🎬 [Placeholder for demo: automated tag assignment + filter search]</p>
          </div>
          <div className="pt-2">
            <Link href="/features/smart-tagging" className="inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">
              View Full Page →
            </Link>
          </div>
        </div>
      </Modal>

      <Modal open={open === "extraction"} onClose={() => setOpen(null)} title="Knowledge Extraction">
        <div className="space-y-4">
          <p className="text-black/80 dark:text-white/80">Transform documents into structured, actionable knowledge.</p>
          <p>Through advanced OCR and reverse-parsing algorithms, the system converts legacy files—whether PDFs, scanned drawings, or handwritten forms—into intelligent records. Extraction covers both visible metadata and deep structure such as embedded document codes, table content, and version control.</p>
          <h4 className="font-semibold">Key Capabilities:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>OCR conversion supporting low-resolution and non-standard fonts</li>
            <li>Reverse parsing of filenames and embedded codes to derive fields like project code, version, and document status</li>
            <li>Batch import and metadata population via Excel templates or drag-and-drop</li>
            <li>Flagging of missing fields and duplicates</li>
            <li>Audit trail of imported and edited metadata for compliance</li>
          </ul>
          <h4 className="font-semibold">Business Value:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Enables full visibility into historical document archives</li>
            <li>Allows integration of physical documents into live search, training, and analysis workflows</li>
            <li>Saves massive manual effort in digitization, classification, and QA</li>
          </ul>
          <div className="space-y-2 text-sm text-black/70 dark:text-white/70">
            <p>📸 [Placeholder for image: OCR process overlay]</p>
            <p>🎬 [Placeholder for demo: drag-and-drop import + auto metadata fill]</p>
          </div>
          <div className="pt-2">
            <Link href="/features/knowledge-extraction" className="inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">
              View Full Page →
            </Link>
          </div>
        </div>
      </Modal>

      <Modal open={open === "workflows"} onClose={() => setOpen(null)} title="Document Workflows">
        <div className="space-y-4">
          <p className="text-black/80 dark:text-white/80">End-to-end digital control over your archive lifecycle.</p>
          <p>Document Workflows power a structured process for submission, review, retrieval, and disposal of documents—integrated with RFID tracking and mobile scanning. Every action is logged, permission-gated, and mapped to a lifecycle stage to ensure operational control and regulatory compliance.</p>
          <h4 className="font-semibold">Key Capabilities:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Online form-based submission with document info + file + physical box barcode</li>
            <li>Configurable approval workflows involving Focal Points (FPs) and Document Record Managers (DRMs)</li>
            <li>Support for borrow/return flows with expected return dates and email reminders</li>
            <li>RFID handheld PDA integration to confirm box movement and binder identity</li>
            <li>Disposal workflows with destruction requests, authorization, and irreversible status update</li>
            <li>Real-time status dashboard and document history timeline</li>
          </ul>
          <h4 className="font-semibold">Business Value:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Enables decentralized teams to archive or retrieve without physical presence</li>
            <li>Minimizes document loss and improves accountability with RFID</li>
            <li>Aligns with enterprise-level records management policy and compliance</li>
          </ul>
          <div className="space-y-2 text-sm text-black/70 dark:text-white/70">
            <p>📸 [Placeholder for image: workflow dashboard + RFID scan]</p>
            <p>🎬 [Placeholder for demo: submit + approve + borrow + return]</p>
          </div>
          <div className="pt-2">
            <Link href="/features/document-workflows" className="inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">
              View Full Page →
            </Link>
          </div>
        </div>
      </Modal>

      <section id="learning-hub" className="space-y-6">
        <h2 className="text-2xl font-semibold">Learning Hub</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard title="Modular Courses" description="Build guided learning paths from bite-sized modules." />
          <FeatureCard title="Assessments" description="Measure comprehension with quizzes and practical checks." />
          <FeatureCard title="Progress Tracking" description="Track completion rates and skill growth across teams." />
          <FeatureCard title="Certifications" description="Issue internal badges and role-based certifications." />
        </div>
      </section>

      <section id="ai-knowledge-services" className="space-y-6">
        <h2 className="text-2xl font-semibold">AI Knowledge Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard title="Semantic Search" description="Find answers with meaning-aware, context-rich retrieval." />
          <FeatureCard title="Summarization" description="Generate concise summaries tailored to roles and tasks." />
          <FeatureCard title="Q&A Assistants" description="Embed AI assistants that cite sources and respect permissions." />
          <FeatureCard title="Insights & Analytics" description="See what knowledge drives outcomes and fill gaps fast." />
        </div>
      </section>

      <section className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
        <h2 className="text-xl font-semibold mb-2">What Our Customers Say</h2>
        <blockquote className="text-black/80 dark:text-white/80">
          “WondeTech helped us capture field knowledge and ramp new hires twice as fast. The semantic search is a game changer for frontline teams.”
        </blockquote>
        <p className="mt-3 text-sm text-black/60 dark:text-white/60">— Alex Morgan, Operations Director</p>
      </section>
    </div>
  );
}




