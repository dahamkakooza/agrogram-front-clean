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

// Create mock components for ALL exports using React.createElement
export const Button = ({ children, ...props }) => React.createElement('button', props, children);
export const Card = ({ children, ...props }) => React.createElement('div', props, children);
export const Input = (props) => React.createElement('input', props);
export const LoadingSpinner = (props) => React.createElement('div', props, 'Loading...');
export const Modal = ({ children, ...props }) => React.createElement('div', props, children);
export const Select = (props) => React.createElement('select', props);
export const Tabs = ({ children, ...props }) => React.createElement('div', props, children);
export const TextArea = (props) => React.createElement('textarea', props);
export const Alert = ({ children, ...props }) => React.createElement('div', props, children);
export const Badge = ({ children, ...props }) => React.createElement('span', props, children);
export const DatePicker = (props) => React.createElement('input', { type: 'date', ...props });
export const MarketPriceTicker = (props) => React.createElement('div', props, 'Market Prices');
export const WeatherWidget = (props) => React.createElement('div', props, 'Weather');
export const Chart = (props) => React.createElement('div', props, 'Chart');
export const DataGrid = (props) => React.createElement('div', props, 'Data Grid');
export const InventoryTracker = (props) => React.createElement('div', props, 'Inventory');
export const POSIntegration = (props) => React.createElement('div', props, 'POS');
export const ProductCarousel = (props) => React.createElement('div', props, 'Products');
export const RecommendationEngine = (props) => React.createElement('div', props, 'Recommendations');
export const HealthMonitor = (props) => React.createElement('div', props, 'Health');
export const OfflineSupport = (props) => React.createElement('div', props, 'Offline');
export const EquipmentTracker = (props) => React.createElement('div', props, 'Equipment');
export const MaintenanceScheduler = (props) => React.createElement('div', props, 'Maintenance');
export const InventoryManager = (props) => React.createElement('div', props, 'Inventory Mgmt');
export const SalesAnalytics = (props) => React.createElement('div', props, 'Sales');
export const DocumentViewer = (props) => React.createElement('div', props, 'Document');
export const DocumentManager = (props) => React.createElement('div', props, 'Doc Manager');
export const BudgetTracker = (props) => React.createElement('div', props, 'Budget');
export const MultiMonitorSupport = (props) => React.createElement('div', props, 'Multi Monitor');
export const SpeechToText = (props) => React.createElement('div', props, 'Speech');
export const TextToSpeech = (props) => React.createElement('div', props, 'Text Speech');
export const ComplianceTracker = (props) => React.createElement('div', props, 'Compliance');
export const ContractManager = (props) => React.createElement('div', props, 'Contract');
export const FleetTracker = (props) => React.createElement('div', props, 'Fleet');
export const RouteOptimizer = (props) => React.createElement('div', props, 'Route');
export const MobileWorkforce = (props) => React.createElement('div', props, 'Mobile');
export const ServiceTracker = (props) => React.createElement('div', props, 'Service');
export const PortfolioManager = (props) => React.createElement('div', props, 'Portfolio');
export const RiskAssessment = (props) => React.createElement('div', props, 'Risk');
export const CaseManager = (props) => React.createElement('div', props, 'Case');
export const KnowledgeBase = (props) => React.createElement('div', props, 'Knowledge');
export const CaseTracker = (props) => React.createElement('div', props, 'Case Track');
export const MarketInsights = (props) => React.createElement('div', props, 'Market');
export const PriceIntelligence = (props) => React.createElement('div', props, 'Price Intel');
export const SystemMonitor = (props) => React.createElement('div', props, 'System');
export const UserManagement = (props) => React.createElement('div', props, 'Users');
export const BusinessIntelligence = (props) => React.createElement('div', props, 'Business Intel');
export const RevenueAnalytics = (props) => React.createElement('div', props, 'Revenue');

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
