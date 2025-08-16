//
//  RCTConvert+MapboxNavigation.h
//  Pods
//
//  Created by Pawan Kumar Kushwaha on 21/07/24.
//

#import <React/RCTConvert.h>
#import <React/RCTConvert+CoreLocation.h>

#import "MapboxWaypoint.h"
#import "MapboxParticipant.h"

@interface RCTConvert (MapboxNavigation)

+ (MapboxWaypoint *)MapboxWaypoint:(id)json;

typedef NSArray MapboxWaypointArray;
+ (MapboxWaypointArray *)MapboxWaypointArray:(id)json;

// MARK: - Participant
+ (MapboxParticipant *)MapboxParticipant:(id)json;
typedef NSArray<MapboxParticipant *> MapboxParticipantArray;
+ (MapboxParticipantArray *)MapboxParticipantArray:(id)json;
@end
