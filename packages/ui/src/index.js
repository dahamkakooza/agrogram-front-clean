// export { default as Button } from './components/Button.jsx';
// export { default as Card } from './components/Card.jsx';
// export { default as Input } from './components/Input.jsx';
// export { theme } from './theme.js';
// export { default as LoadingSpinner } from './components/LoadingSpinner.jsx';
// export { default as Modal } from './components/Modal.jsx';
// export { default as Select } from './components/Select.jsx';
// export { default as Tabs } from './components/Tabs.jsx';
// export { default as TextArea } from './components/TextArea.jsx';
// export { default as Alert } from './components/Alert.jsx'; // Add this line
// export { default as Badge } from './components/Badge.jsx'; // Add this line
// export { default as DatePicker } from './components/DatePicker/DatePicker.jsx'; // Add this line
// export { default as MarketPriceTicker } from './components/MarketPriceTicker.jsx'; // Add this line
// export { default as WeatherWidget } from './components/WeatherWidget.jsx'; // Add this line
// export { default as Chart } from './components/Chart.jsx'; // Add this line
// export { default as DataGrid } from './components/DataGrid.jsx'; // Add this line
// export { default as InventoryTracker } from './components/InventoryTracker.jsx'; // Add this line
// export { default as POSIntegration } from './components/POSIntegration.jsx'; // Add this line
// export { default as ProductCarousel } from './components/ProductCarousel.jsx'; // Add this line
// export { default as RecommendationEngine } from './components/RecommendationEngine.jsx'; // Add this line
// export { default as HealthMonitor } from './components/HealthMonitor.jsx'; // Add this line
// export { default as OfflineSupport } from './components/OfflineSupport.jsx'; // Add this line
// export { default as EquipmentTracker } from './components/EquipmentTracker.jsx'; // Add this line
// export { default as MaintenanceScheduler } from './components/MaintenanceScheduler.jsx'; // Add this line
// export { default as InventoryManager } from './components/InventoryManager.jsx'; // Add this line
// export { default as SalesAnalytics } from './components/SalesAnalytics.jsx'; // Add this line
// export { default as DocumentViewer } from './components/DocumentViewer.jsx'; // Add this line
// export { default as DocumentManager } from './components/DocumentManager.jsx'; // Add this line
// export { default as BudgetTracker } from './components/BudgetTracker.jsx'; // Add this line
// export { default as MultiMonitorSupport } from './components/MultiMonitorSupport.jsx'; // Add this line
// export { default as SpeechToText } from './components/SpeechToText.jsx'; // Add this line
// export { default as TextToSpeech } from './components/TextToSpeech.jsx'; // Add this line   
// export { default as ComplianceTracker } from './components/ComplianceTracker.jsx'; // Add this line
// export { default as ContractManager } from './components/ContractManager.jsx'; // Add this line
// export { default as FleetTracker } from './components/FleetTracker.jsx'; // Add this line
// export { default as RouteOptimizer } from './components/RouteOptimizer.jsx'; // Add this line
// export { default as MobileWorkforce} from './components/MobileWorkforce.jsx'; // Add this line
// export { default as ServiceTracker } from './components/ServiceTracker.jsx'; // Add this line
// export { default as PortfolioManager } from './components/PortfolioManager.jsx'; // Add this line
// export { default as RiskAssessment } from './components/RiskAssessment.jsx'; // Add this line
// export { default as CaseManager } from './components/CaseManager.jsx'; // Add this line
// export { default as KnowledgeBase } from './components/KnowledgeBase.jsx'; // Add this line
// export { default as CaseTracker } from './components/CaseTracker.jsx'; // Add this line
// export { default as MarketInsights } from './components/MarketInsights.jsx'; // Add this line
// export { default as PriceIntelligence} from './components/PriceIntelligence.jsx'; // Add this line
// export { default as SystemMonitor } from './components/SystemMonitor.jsx'; // Add this line
// export { default as UserManagement } from './components/UserManagement.jsx'; // Add this line
// export { default as BusinessIntelligence } from './components/BusinessIntelligence.jsx'; // Add this line
// export {default as RevenueAnalytics} from './components/RevenueAnalytics.jsx'; // Add this line
import React from 'react';

// Create mock components for ALL exports
export const Button = ({ children, ...props }) => <button {...props}>{children}</button>;
export const Card = ({ children, ...props }) => <div {...props}>{children}</div>;
export const Input = (props) => <input {...props} />;
export const LoadingSpinner = (props) => <div {...props}>Loading...</div>;
export const Modal = ({ children, ...props }) => <div {...props}>{children}</div>;
export const Select = (props) => <select {...props} />;
export const Tabs = ({ children, ...props }) => <div {...props}>{children}</div>;
export const TextArea = (props) => <textarea {...props} />;
export const Alert = ({ children, ...props }) => <div {...props}>{children}</div>;
export const Badge = ({ children, ...props }) => <span {...props}>{children}</span>;
export const DatePicker = (props) => <input type="date" {...props} />;
export const MarketPriceTicker = (props) => <div {...props}>Market Prices</div>;
export const WeatherWidget = (props) => <div {...props}>Weather</div>;
export const Chart = (props) => <div {...props}>Chart</div>;
export const DataGrid = (props) => <div {...props}>Data Grid</div>;
export const InventoryTracker = (props) => <div {...props}>Inventory</div>;
export const POSIntegration = (props) => <div {...props}>POS</div>;
export const ProductCarousel = (props) => <div {...props}>Products</div>;
export const RecommendationEngine = (props) => <div {...props}>Recommendations</div>;
export const HealthMonitor = (props) => <div {...props}>Health</div>;
export const OfflineSupport = (props) => <div {...props}>Offline</div>;
export const EquipmentTracker = (props) => <div {...props}>Equipment</div>;
export const MaintenanceScheduler = (props) => <div {...props}>Maintenance</div>;
export const InventoryManager = (props) => <div {...props}>Inventory Mgmt</div>;
export const SalesAnalytics = (props) => <div {...props}>Sales</div>;
export const DocumentViewer = (props) => <div {...props}>Document</div>;
export const DocumentManager = (props) => <div {...props}>Doc Manager</div>;
export const BudgetTracker = (props) => <div {...props}>Budget</div>;
export const MultiMonitorSupport = (props) => <div {...props}>Multi Monitor</div>;
export const SpeechToText = (props) => <div {...props}>Speech</div>;
export const TextToSpeech = (props) => <div {...props}>Text Speech</div>;
export const ComplianceTracker = (props) => <div {...props}>Compliance</div>;
export const ContractManager = (props) => <div {...props}>Contract</div>;
export const FleetTracker = (props) => <div {...props}>Fleet</div>;
export const RouteOptimizer = (props) => <div {...props}>Route</div>;
export const MobileWorkforce = (props) => <div {...props}>Mobile</div>;
export const ServiceTracker = (props) => <div {...props}>Service</div>;
export const PortfolioManager = (props) => <div {...props}>Portfolio</div>;
export const RiskAssessment = (props) => <div {...props}>Risk</div>;
export const CaseManager = (props) => <div {...props}>Case</div>;
export const KnowledgeBase = (props) => <div {...props}>Knowledge</div>;
export const CaseTracker = (props) => <div {...props}>Case Track</div>;
export const MarketInsights = (props) => <div {...props}>Market</div>;
export const PriceIntelligence = (props) => <div {...props}>Price Intel</div>;
export const SystemMonitor = (props) => <div {...props}>System</div>;
export const UserManagement = (props) => <div {...props}>Users</div>;
export const BusinessIntelligence = (props) => <div {...props}>Business Intel</div>;
export const RevenueAnalytics = (props) => <div {...props}>Revenue</div>;

// Mock theme
export const theme = {
  colors: {
    primary: '#000',
    secondary: '#fff'
  }
};

// Default export
export default {
  Button, Card, Input, LoadingSpinner, Modal, Select, Tabs, TextArea, Alert, Badge,
  DatePicker, MarketPriceTicker, WeatherWidget, Chart, DataGrid, InventoryTracker,
  POSIntegration, ProductCarousel, RecommendationEngine, HealthMonitor, OfflineSupport,
  EquipmentTracker, MaintenanceScheduler, InventoryManager, SalesAnalytics, DocumentViewer,
  DocumentManager, BudgetTracker, MultiMonitorSupport, SpeechToText, TextToSpeech,
  ComplianceTracker, ContractManager, FleetTracker, RouteOptimizer, MobileWorkforce,
  ServiceTracker, PortfolioManager, RiskAssessment, CaseManager, KnowledgeBase, CaseTracker,
  MarketInsights, PriceIntelligence, SystemMonitor, UserManagement, BusinessIntelligence,
  RevenueAnalytics,
  theme
};
// // // Add more exports as needed
