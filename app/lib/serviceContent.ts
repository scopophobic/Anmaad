export type ServiceSection = {
  title: string;
  items: string[];
};

export type ServiceDetail = {
  id: string;
  title: string;
  summary: string;
  intro: string;
  sections: ServiceSection[];
  closingNote?: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    id: 'accounting',
    title: 'Accounting & Bookkeeping',
    summary:
      'Accurate and customized bookkeeping on Tally with MIS-ready statements and audit-ready reports.',
    intro:
      'ANMAAD offers accurate and customized Bookkeeping & Accounting solutions using advanced software like Tally. We maintain your books weekly, monthly, quarterly, or yearly as required.',
    sections: [
      {
        title: 'What We Offer',
        items: [
          'Recording of transactions',
          'General & subsidiary ledgers',
          'Fixed asset register',
          'Accounts receivable & ageing',
          'Accounts payable & overdue tracking',
          'Bank reconciliation',
          'Trial Balance, P&L, Balance Sheet, Cash Flow',
          'GST/TDS reports',
          'Annual financial statements',
          'MIS & management reports',
        ],
      },
      {
        title: 'Benefits of Outsourcing',
        items: [
          'Highly economical',
          'Tax compliance included',
          'Timely reports',
          'Lower infrastructure costs',
          'Audit-ready financials',
        ],
      },
    ],
    closingNote: 'Let ANMAAD simplify your financial operations.',
  },
  {
    id: 'registrations',
    title: 'Business Registrations',
    summary:
      'End-to-end business registrations, tax IDs, and industry-specific licenses across India.',
    intro:
      'Start your business with proper regulatory compliance. We assist with all types of registrations required in India.',
    sections: [
      {
        title: 'Company Formation',
        items: [
          'Private Limited Company',
          'LLP',
          'Partnership Firm',
          'Sole Proprietorship',
          'One Person Company',
        ],
      },
      {
        title: 'Tax & Compliance Registrations',
        items: ['PAN / TAN', 'GST Registration', 'Professional Tax', 'PF / ESI'],
      },
      {
        title: 'Industry & Activity-Based Registrations',
        items: [
          'Import Export Code (IEC)',
          'MSME / UDYAM Registration',
          'Shop & Establishment License',
          'Factory License',
          'ISO Certification',
          'Trademark / Copyright / Patent',
        ],
      },
    ],
    closingNote: 'We ensure quick, accurate, and hassle-free registrations.',
  },
  {
    id: 'export',
    title: 'Export Documentation',
    summary:
      'Complete export documentation prepared correctly and delivered on time.',
    intro:
      'We assist exporters with complete documentation support required for smooth international shipments.',
    sections: [
      {
        title: 'Our Documentation Services',
        items: [
          'Pre-Shipment: Invoice, Packing List, Inspection Certificates',
          'Regulatory: IEC, AD Code, DGFT/RBI compliance, GST export documents',
          'Customs: Shipping Bill, E-way Bill, Bond/LUT',
          'Shipping: Certificate of Origin, BL/AWB',
          'Post-Shipment: BRC/e-BRC, bank submissions',
          'Specialized Certificates: Fumigation, CE/ISO',
          'Incentive Schemes: RoDTEP, RoSCTL, EPCG, Advance Authorization',
        ],
      },
    ],
    closingNote: 'Every export document is prepared correctly and delivered on time.',
  },
  {
    id: 'tally',
    title: 'Tally Automation & Customization',
    summary:
      'Automation, customization, and integrations that make Tally smarter and workflow-ready.',
    intro:
      'We automate and customize Tally to simplify your business accounting operations with streamlined workflows.',
    sections: [
      {
        title: 'Automation & Configuration',
        items: [
          'Company & master setup',
          'GST/TDS configuration',
          'Automated voucher entries',
          'Customized invoice formats',
          'Auto-bank reconciliation',
          'Automated MIS reporting',
        ],
      },
      {
        title: 'TDL Customization',
        items: ['Custom modules', 'BI dashboards', 'Workflow automation', 'User access control'],
      },
      {
        title: 'Integration Services',
        items: [
          'E-Invoice automation',
          'E-Way Bill automation',
          'Excel/ERP/CRM integration',
          'Inventory & POS integration',
        ],
      },
      {
        title: 'Data Management',
        items: ['Data synchronization', 'Data migration & splitting', 'Backup automation'],
      },
    ],
    closingNote: 'We make Tally smarter, faster, and fully aligned with your business.',
  },
  {
    id: 'payroll',
    title: 'Payroll Services',
    summary:
      'Tally-powered payroll processing with complete statutory compliance and bank-ready outputs.',
    intro:
      'We manage your payroll operations using Tally, ensuring accuracy and 100% statutory compliance.',
    sections: [
      {
        title: 'Payroll Solutions',
        items: [
          'Employee master setup',
          'Salary structure configuration',
          'Monthly salary processing',
          'Overtime, incentives, leave integration',
          'Salary slip generation',
        ],
      },
      {
        title: 'Statutory Compliance',
        items: [
          'PF, ESI, TDS, Professional Tax',
          'Monthly challans & returns',
          'Statutory registers',
          'Reconciliation reports',
        ],
      },
      {
        title: 'Documentation & Integration',
        items: [
          'Full & final settlements',
          'Bonus & gratuity reports',
          'Loan/advance management',
          'Attendance machine integration',
          'Bank payout file creation',
        ],
      },
    ],
    closingNote: 'ANMAAD provides reliable, error-free payroll every month.',
  },
  {
    id: 'taxation',
    title: 'Taxation & Compliance',
    summary:
      'Complete GST, TDS, Income Tax, ROC/MCA, and audit support under one roof.',
    intro:
      'We handle complete tax and compliance management for your business.',
    sections: [
      {
        title: 'Our Services',
        items: [
          'GST returns & reconciliation',
          'TDS filing & deduction management',
          'Income tax computation & filing',
          'ROC / MCA annual filings',
          'Statutory audit assistance',
          'Financial statement preparation',
        ],
      },
    ],
    closingNote: 'We ensure your business remains fully compliant with Indian regulations.',
  },
];

