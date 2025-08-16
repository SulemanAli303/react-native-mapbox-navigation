import type { HostComponent, ViewProps } from 'react-native';

import type { Double } from 'react-native/Libraries/Types/CodegenTypes';
import type { NativeEventsProps } from './types';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

type NativeCoordinate = number[];
interface NativeProps extends ViewProps {
  mute?: boolean;
  separateLegs?: boolean;
  distanceUnit?: string;
  startOrigin: NativeCoordinate;
  waypoints?: {
    latitude: Double;
    longitude: Double;
    name?: string;
    separatesLegs?: boolean;
  }[];
  destinationTitle?: string;
  destination: NativeCoordinate;
  language?: string;
  showCancelButton?: boolean;
  shouldSimulateRoute?: boolean;
  showsEndOfRouteFeedback?: boolean;
  hideStatusView?: boolean;
  travelMode?: string;
  realTimeList?: {
    _id: string;
    userMail: string;
    coverImage: string;
    displayName: string;
    imageUrl: string;
    isBenzifiMember: boolean;
    nation: string;
    userName: string;
    lat: number;
    lng: number;
  }[];
}

export default codegenNativeComponent<NativeProps>(
  'MapboxNavigationView'
) as HostComponent<NativeProps & NativeEventsProps>;
