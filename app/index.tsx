import React from "react";
import { View, StatusBar, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import TypeWriter from "react-native-typewriter";

const App = () => {
  return (
    <View className="flex-1 bg-white">
      <StatusBar hidden={true} />
      <SafeAreaView className="flex-1">
        <View className="flex-1 justify-center items-center w-full">
          <TypeWriter
            className="text-heading text-textPrimary mb-8 text-shadow-lg"
            typing={1} // Typing state: 1 for typing, 0 for stopped
            minDelay={50} // Delay between characters
            maxDelay={100} // Maximum delay between characters
          >
          <View className="flex items-center justify-center">
            <Text className="text-7xl font-primary mb-8 text-shadow-lg">
              JUDGEMENT
            </Text>
          </View>

          </TypeWriter>

          <View className="items-center w-3/5">
            <Link href="/play/room/roomLanding" asChild>
              <TouchableOpacity className="bg-[#28A745] py-3 px-5 rounded-2xl shadow-lg w-1/2 items-center mb-5 active:bg-btnClick">
                <Text className="text-white font-special uppercase tracking-widest">
                  Play
                </Text>
              </TouchableOpacity>
            </Link>

            {/* How to Play Button */}
            <Link href="/howToPlay" asChild>
              <TouchableOpacity className="bg-[#6610F2] py-3 px-5 rounded-2xl shadow-lg w-1/2 items-center active:bg-btnClick">
                <Text className="text-white font-special uppercase tracking-widest">
                  How to Play
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
