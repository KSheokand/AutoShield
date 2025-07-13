# 🛡️ AutoShield Architecture

AutoShield is an **AWS Cloud Security Automation tool** designed to:  
- **Scan** cloud infrastructure for misconfigurations  
- **Apply Auto-Fixes** for common vulnerabilities  
- **Validate** changes with post-fix testing  
- **Report** results on a real-time dashboard  

This document outlines the architecture and workflow of AutoShield.

---

## 🗺️ High-Level Workflow

```mermaid
flowchart TD
    subgraph AWS_Cloud
        A[S3 Buckets] -->|Scan| B1
        B[EC2 Instances] -->|Scan| B1
        C[IAM Policies] -->|Scan| B1
        D[VPC Configurations] -->|Scan| B1
    end

    subgraph Backend_API_Node
        B1[Scan Cloud Infrastructure]
        B1 --> C1[Detect Misconfigurations]
        C1 --> D1[Apply Auto-Fix Rules]
        D1 --> E1[Run Post-Fix Validation]
        E1 --> F1[Save Results to Database]
    end

    subgraph Database_MongoDB
        F1 --> G1[Audit Logs]
        F1 --> G2[Scan Reports]
    end

    subgraph Frontend_Dashboard_Next
        H1[User Dashboard]
        H1 -->|Fetch Reports| G2
        H1 -->|View Logs| G1
    end

    H1 -->|Send API Requests| B1


---

## 🏗️ System Components

### ✅ **Backend (Node.js + Express)**

Handles API requests, scans AWS infrastructure, applies auto-fixes, and stores results.

### ✅ **Frontend (Next.js + Tailwind CSS)**

Interactive dashboard for users to monitor security posture, view logs, and trigger scans/fixes.

### ✅ **Database (MongoDB)**

Stores scan reports, audit logs, and user configurations.

### ✅ **AWS Cloud Integration**

AutoShield connects to AWS using IAM roles with scoped permissions.

---

## ⚙️ Tech Stack

| Layer      | Technology                |
| ---------- | ------------------------- |
| Frontend   | Next.js, Tailwind CSS     |
| Backend    | Node.js, Express          |
| Database   | MongoDB                   |
| Cloud APIs | AWS SDK                   |
| Auth       | AWS IAM Roles             |
| CI/CD      | GitHub Actions (optional) |

---

## 📊 Dashboard Features

* Real-time alerts for critical misconfigurations.
* Visual reports with severity levels (Critical, Medium, Low).
* Auto-fix toggle (manual/automatic mode).
* Audit log viewer for compliance.

---

## 🌐 Deployment

* Backend & Frontend: Deploy on AWS EC2 or Docker containers.
* Optional: Use Terraform for Infrastructure as Code.

---
