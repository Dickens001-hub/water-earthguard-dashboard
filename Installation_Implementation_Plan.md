# Implementation Plan for an AI and IoT Water Leakage and NRW Monitoring Pilot

## 1. Project Objective

This project will install a pilot AI and IoT water monitoring system in one urban District Metered Area in Nairobi-style conditions. The pilot will detect leakages, pressure problems, commercial water losses, abnormal customer consumption, and possible illegal connections.

The system will combine water engineering, practical geotechnical checks, IoT sensors, water quality test sensors, GIS mapping, AI analytics, a dashboard, and a mobile field application. The target is to reduce non-revenue water in the pilot area by 10% to 20% within three months after commissioning while also monitoring basic water quality.

## 2. Pilot Area Selection

The pilot area should be selected using the following criteria:

- High reported non-revenue water.
- Frequent pipe bursts or leakage complaints.
- Mixed pipe ages and materials.
- Existing customer meter and billing records.
- Accessible valves that can isolate the area as one DMA.
- Mobile network coverage for NB-IoT or GSM communication.
- Safe access for construction, inspection, and maintenance teams.
- Presence of road crossings, high-pressure sections, or old pipelines that justify monitoring.

Before installation begins, the project team should confirm the DMA boundary using pipe maps, valve inspections, customer records, and field verification.

## 3. Project Team and Responsibilities

The project should be delivered by a combined engineering and technology team.

| Role | Main Responsibility |
| --- | --- |
| Project manager | Coordinates schedule, budget, reporting, approvals, and contractor supervision. |
| Water engineer | Designs the DMA, selects meter/sensor locations, verifies hydraulics, and supervises pressure management. |
| Geotechnical engineer | Checks soil condition, chamber foundation stability, groundwater, drainage, trench safety, and road crossing risks. |
| IoT engineer | Installs and configures sensors, telemetry units, gateways, batteries, and communication devices. |
| GIS specialist | Maps pipes, valves, meters, chambers, alerts, customer points, and field inspection locations. |
| AI/data engineer | Builds anomaly detection rules, AI models, dashboards, alerts, and data pipelines. |
| Field supervisor | Manages site teams, excavation, chamber construction, safety, labeling, and field documentation. |
| Utility operations team | Provides network access, valves, repair crews, billing data, customer records, and operational approvals. |

## 4. Baseline Survey

The baseline survey must be completed before physical installation.

The team should collect:

- Existing pipe maps and GIS layers.
- Valve, hydrant, meter, and chamber locations.
- Customer account and meter records.
- Current billed consumption in the proposed DMA.
- Bulk supply records, if available.
- Historical leakage and burst reports.
- Pressure records from the utility, if available.
- Illegal connection and meter tampering reports.
- Road layouts, drainage paths, and utility crossings.
- Soil and groundwater observations from previous works or field inspection.

The baseline output should include:

- Confirmed DMA boundary.
- List of customers inside the DMA.
- Estimated baseline NRW.
- High-risk pipe sections.
- Proposed sensor locations.
- Proposed excavation and chamber locations.
- Safety and traffic management needs.

## 5. Geotechnical and Constructability Checks

Before digging at any sensor, meter, valve, or chamber location, the geotechnical engineer and field supervisor should inspect the site.

The practical checks should cover:

- Soil stability and risk of trench collapse.
- Groundwater seepage or waterlogged ground.
- Existing pipe bedding condition.
- Road pavement condition and traffic loading.
- Nearby buildings, walls, drains, poles, and buried services.
- Stormwater flow direction and flood risk.
- Erosion risk around chambers and exposed pipe sections.
- Bearing support for chamber bases and covers.
- Safe access for maintenance workers.

Where the ground is weak, wet, or unstable, the design should include improved bedding, compacted hardcore, concrete base support, side shoring, drainage, or relocation of the chamber.

## 6. Physical Installation Works

### 6.1 DMA Inlet Metering Point

At the DMA inlet, install:

- One bulk electromagnetic or ultrasonic flow meter.
- One inlet pressure sensor.
- One telemetry unit.
- One lockable, drained, and accessible meter chamber.
- One isolation valve upstream and downstream where missing or unreliable.
- One bypass arrangement if required by utility operations.

The bulk meter should be installed on a straight pipe length according to manufacturer requirements. It should be calibrated and labeled with its device ID, GPS coordinate, installation date, and flow direction.

### 6.2 Pressure Monitoring Points

Install pressure sensors at:

- The DMA inlet.
- The highest elevation point in the DMA.
- The lowest elevation point in the DMA.
- A known burst-prone pipe section.
- An old pipe section with repeated complaints.

Each pressure sensor should report pressure, timestamp, battery level, signal strength, and device health status.

### 6.3 Acoustic Leak Detection Points

Install acoustic sensors on selected high-risk mains, especially:

- Old metallic pipes.
- High-pressure mains.
- Pipes with repeated leak history.
- Sections near road crossings.
- Areas where leaks may remain hidden underground.

The acoustic sensors should capture vibration or noise patterns during quiet periods, especially at night when background demand and road activity are lower.

### 6.4 Smart Customer Meters

Install smart meters for selected customers:

- High-consumption customers.
- Customers with repeated estimated bills.
- Customers with suspicious low or zero consumption.
- Priority public facilities such as schools, clinics, markets, and government buildings.
- Sample households across the DMA for consumption comparison.

The smart meters should report consumption, timestamp, meter status, tamper alerts where available, battery level, and communication status.

### 6.5 Water Quality Test Sensors

Install water quality test sensors at the DMA inlet, selected dead-end mains, tank or storage outlet points, and high-risk customer supply points.

The sensors should monitor:

- pH.
- Turbidity.
- Residual chlorine.
- Electrical conductivity.
- Temperature.

The system should flag possible contamination, low disinfectant residual, stagnant water, backflow, intrusion through damaged pipes, or sudden changes from the local baseline.

### 6.6 Pressure-Reducing Valves

Install or rehabilitate pressure-reducing valves where:

- Night pressure is high.
- Pipe bursts are frequent.
- The DMA has large elevation differences.
- Old pipes are exposed to excessive pressure.

The pressure-reducing valve should be commissioned with agreed day and night pressure settings. The settings should avoid both excessive pressure and low-pressure service failure.

## 7. Communication and Power Setup

The communication design should use:

- LoRaWAN for low-power pressure, acoustic, and meter sensors where gateway coverage is practical.
- NB-IoT or GSM for critical points, difficult LoRaWAN areas, or dense urban locations with good mobile coverage.
- Fibre or Ethernet only for the control centre and fixed utility facilities.

The power design should use:

- Long-life batteries for normal low-power sensors.
- Replaceable or rechargeable battery packs for high-transmission devices.
- Solar backup only where devices need higher power or where battery replacement access is difficult.

During commissioning, every device must be tested for signal strength, packet delivery, battery status, and correct timestamp synchronization.

## 8. Data Platform and Dashboard

The data platform should receive and store:

- Flow readings.
- Pressure readings.
- Acoustic readings.
- Water quality readings.
- Smart meter consumption.
- Battery and signal data.
- Device health status.
- GIS pipe and valve layers.
- Customer account and billing data.
- Repair history.
- Inspection reports.

The dashboard should show:

- Live DMA map.
- DMA inlet flow.
- Pressure trends.
- Minimum night flow.
- NRW estimate.
- Sensor status.
- Battery and communication status.
- Leak alerts.
- Water quality alerts.
- Commercial loss alerts.
- Work order status.
- Field team updates.

The DMA status should use four colors:

- Green: normal operation.
- Yellow: possible leakage or pressure problem.
- Red: serious leak risk or high water loss.
- Black: suspected illegal connection, meter bypass, or billing issue.

## 9. AI and Analytics Rules

The first version should use practical AI-assisted rules and anomaly detection before moving to more complex machine learning.

The system should flag:

- High minimum night flow compared with the DMA baseline.
- Sudden pressure drop at one or more pressure sensors.
- Continuous low pressure below the service threshold.
- Flow entering the DMA without matching billed or metered consumption.
- Customer meter reading zero while nearby flow and pressure remain normal.
- Sudden customer consumption drop without account change or disconnection.
- Acoustic noise pattern above the local leak-risk threshold.
- Low residual chlorine, high turbidity, abnormal pH, sudden conductivity change, or unusual temperature change.
- Device outage, low battery, or repeated communication failure.

Each alert must include:

- Alert ID.
- Timestamp.
- GPS location.
- Sensor source.
- Risk level.
- Likely cause.
- Recommended field action.
- Assigned team or status.

## 10. Mobile Field Application

The mobile application should allow field teams to:

- Receive assigned leak, pressure, meter, or illegal connection alerts.
- Open a map and navigate to the alert location.
- View sensor readings and alert history.
- Upload photos.
- Record inspection findings.
- Record repair actions.
- Capture meter readings.
- Record field water quality test results.
- Report suspected tampering or illegal connections.
- Close or escalate work orders.

Every field update should synchronize with the dashboard so managers can see the current status of each issue.

## 11. Installation Sequence

1. Approve pilot area and project team.
2. Collect baseline data and existing utility records.
3. Confirm DMA boundary through map review and field inspection.
4. Identify and mark meter, sensor, valve, and chamber locations.
5. Perform geotechnical and constructability checks at each excavation point.
6. Prepare traffic management and site safety controls.
7. Construct or rehabilitate chambers.
8. Install bulk flow meter, pressure sensors, acoustic sensors, smart meters, telemetry units, and PRVs.
9. Label all devices and record GPS coordinates.
10. Configure device communication and power systems.
11. Connect all devices to the data platform.
12. Load GIS, customer, billing, and repair history data.
13. Configure dashboard views, alert rules, and mobile app users.
14. Calibrate meters and validate pressure readings.
15. Train engineers, managers, and field teams.
16. Run 7-day commissioning tests.
17. Start the 3-month pilot evaluation period.

## 12. Commissioning Tests

The system should pass these tests before the pilot starts:

| Test | Acceptance Requirement |
| --- | --- |
| Bulk meter test | Flow readings verified using manufacturer-approved calibration or known-flow comparison. |
| Pressure sensor test | Sensor readings match manual gauge checks within acceptable tolerance. |
| Communication test | At least 95% data transmission uptime during the 7-day commissioning period. |
| Battery test | All devices report battery status and expected operating range. |
| Dashboard test | Dashboard displays live flow, pressure, NRW estimate, sensor status, and alert history. |
| Mobile app test | Field team can receive, update, upload photos, and close work orders. |
| Alert test | Simulated high night flow, pressure drop, sensor outage, and suspicious zero consumption create alerts. |
| Field workflow test | One alert is followed from dashboard creation to field inspection and closure. |

## 13. Pilot Monitoring and KPIs

During the three-month pilot, the team should monitor:

- Baseline NRW versus current NRW.
- Daily and weekly DMA inflow.
- Minimum night flow.
- Number of leaks detected.
- Number of leaks repaired.
- Average leak detection time.
- Average repair response time.
- Number of verified illegal connections.
- Number of faulty or bypassed meters.
- Communication uptime.
- Sensor battery health.
- Water volume saved.
- Revenue recovered.

The pilot should be considered successful if it shows measurable reduction in NRW, faster leak response, improved billing accuracy, and reliable sensor-to-dashboard performance.

## 14. Risk Control Measures

| Risk | Control Measure |
| --- | --- |
| Sensor failure | Keep spare sensors, monitor device health, and schedule maintenance checks. |
| Poor network signal | Use NB-IoT/GSM backup or reposition LoRaWAN gateway. |
| Unstable soil or wet ground | Improve bedding, add drainage, shore trenches, or relocate chamber. |
| Incomplete utility records | Verify through field survey, GPS mapping, and customer walk-throughs. |
| False AI alerts | Tune thresholds during commissioning and confirm alerts through field inspection. |
| Low staff adoption | Train users and keep dashboard workflows simple. |
| Vandalism or theft | Use lockable chambers, hidden cabling, labels, and community awareness. |
| Traffic disruption | Use permits, signage, barriers, and off-peak work scheduling. |

## 15. Handover Deliverables

At the end of installation and commissioning, the project team should hand over:

- As-built DMA map.
- Sensor and meter inventory.
- GPS coordinates for all devices.
- Calibration records.
- Communication test report.
- Commissioning report.
- Dashboard login and user guide.
- Mobile app user guide.
- Field response procedure.
- Maintenance schedule.
- Three-month pilot monitoring template.

## 16. Conclusion

This implementation plan converts the AI and IoT NRW concept into a practical installation project. It covers the water engineering design, geotechnical checks, sensor installation, communication setup, data platform, AI analytics, dashboard, mobile field workflow, commissioning, and pilot evaluation.

By starting with one high-loss urban DMA, the water utility can prove the system at manageable scale, reduce losses, recover revenue, and build the evidence needed for expansion to more zones.
