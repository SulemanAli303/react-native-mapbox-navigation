//
//  MapboxNavigationViewManager.swift
//  react-native-mapbox-navigation
//
//  Created by Pawan Kushwaha on 10/07/2024.
//

@objc(MapboxNavigationViewManager)
class MapboxNavigationViewManager: RCTViewManager {
    override func view() -> UIView! {
        return MapboxNavigationView();
    }

    override static func requiresMainQueueSetup() -> Bool {
        return true
    }

    @objc(setWaypoints:waypoints:)
    public func setWaypoints(view: Any, waypoints: [MapboxWaypoint]) {
        guard let currentView = view as? MapboxNavigationView else {
            return
        }
        currentView.setWaypoints(waypoints: waypoints)
    }
   @objc func setRealTimeList(_ reactTag: NSNumber, list: NSArray) {
           self.bridge.uiManager.addUIBlock { (_, viewRegistry) in
               if let view = viewRegistry?[reactTag] as? MapboxNavigationView {
                   let userList = list as? [[String: Any]] ?? []
                   view.updateMarkers(userList)
               }
           }
       }
}
