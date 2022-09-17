import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type AppParamList = {
  HomeScreen: undefined;
  CreatePostScreen: undefined;
  ProfileScreen: { id: string };
};

//from react navigation docs
//declaration merging
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppParamList {}
  }
}

export type AppNavigationProps<RouteName extends keyof AppParamList> =
  NativeStackNavigationProp<AppParamList, RouteName>;

export interface ScreenProps<RouteName extends keyof AppParamList>
  extends NativeStackScreenProps<AppParamList, RouteName> {}
