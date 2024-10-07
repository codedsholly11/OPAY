
import { StyleSheet, Text, View, Image, Button, } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import "./global.css"

export default function App() {
  return (
    <View className='flex-[1] items-center pt-[40px] mt-[20px] font-[3xl] bg-[#f2f8fc]'>
      <View className='flex-row gap-[49px] items-center'>
        <View className=' flex-row p-[5px] bg-[#f2f8fc] rounded-full items-center gap-[10px]'>
          <Image source={ require('../opay/assets/shola.jpg')} className='h-[30px] w-[30px] rounded-full p-[5px]'/> 
          <Text className=''>Hi, CODEDSHOLLY</Text>
        </View>
        <View className='flex-row gap-[10px]'>
          <AntDesign name="customerservice" size={24} color="black" />
          <AntDesign name="scan1" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View> 
      </View>

      <View className='bg-[#1bd09f] flex flex-row items-center justify-between gap-[40px] px-[20px] py-[8px] mt-[30px] rounded-xl h-[12vh]'>
        <View className='flex-col gap-[15px]'>
          <Text className=' text-white'>Available Balance</Text>
          <Text className=' text-white'>********</Text>
        </View>
        <View className='flex-col gap-[10px]'>
          <Text className=' text-white'>Transaction History</Text>
          <View className='bg-white rounded-full w-[110px] px-4 py-[5px] items-center'>
            <Text className='text-[#1bd09f]'>+ Add Money</Text>
          </View>
        </View>
      </View>
      <View className=' flex-row items-center justify-center gap-[50px] rounded-xl mt-[20px] py-[13px] px-[20px] h-[12vh] bg-white  shadow-yellow-50 w-[86vw] '>
        <View className='flex-col items-center justify-center gap-[10px]'>
          <View className='bg-[#d9fff5] h-[40px] w-[40px] items-center justify-center rounded-xl'>
              <MaterialCommunityIcons name="contacts-outline" size={15} color="black" />
          </View>
          <Text>To Opay</Text>
        </View>
        <View className='flex-col items-center justify-center gap-[10px]'>
          <View className='bg-[#d9fff5] h-[40px] w-[40px] items-center justify-center rounded-xl'>
              <MaterialCommunityIcons name="bank-outline" size={15} color="black" />
          </View>
          <Text>To Bank</Text>
        </View>
        <View className='flex-col items-center justify-center gap-[10px]'>
          <View className='bg-[#d9fff5] h-[40px] w-[40px] items-center justify-center rounded-xl'>
              <AntDesign name="arrowsalt" size={15} color="black" />
          </View>
          <Text>Withdrawal</Text>
        </View>
      </View>

      <View className='mt-[20px] bg-white w-[86vw] items-center justify-center h-[22vh] rounded-xl gap-[5px] '>
          <View className='flex-row gap-[35px]'>
            <View className='flex-col  justify-center gap-[5px]'>
              <View className='bg-[#d9fff5] h-[40px] w-[40px] items-center justify-center rounded-full'>
                <MaterialIcons name="signal-cellular-alt" size={15} color="black" />
              </View>
              <Text>Airtime</Text>
            </View>
            <View className='flex-col  justify-center gap-[5px]'>
              <View className='bg-[#d9fff5] h-[40px] w-[40px] items-center justify-center rounded-full'>
                <FontAwesome6 name="arrow-up-short-wide" size={15} color="black" />
              </View>
              <Text>Data</Text>
            </View>
            <View className='flex-col  justify-center gap-[5px]'>
              <View className='bg-[#d9fff5] h-[40px] w-[40px] items-center justify-center rounded-full'>
              <FontAwesome name="soccer-ball-o" size={15} color="black" />
              </View>
              <Text>Betting</Text>
            </View>
            <View className='flex-col  justify-center gap-[5px]'>
              <View className='bg-[#d9fff5] h-[40px] w-[40px] items-center justify-center rounded-full'>
                <MaterialCommunityIcons name="television-classic" size={15} color="black" />
              </View>
              <Text>Tv</Text>
            </View>
          </View>


          <View className='flex-row gap-[35px]'>
            <View className='flex-col  justify-center gap-[5px]'>
              <View className='bg-[#d9fff5] h-[40px] w-[40px] items-center justify-center rounded-full'>
                <MaterialIcons name="savings" size={15} color="black" />
              </View>
              <Text>Owealth</Text>
            </View>
            <View className='flex-col  justify-center gap-[5px]'>
              <View className='bg-[#d9fff5] h-[40px] w-[40px] items-center justify-center rounded-full'>
                <Entypo name="creative-cloud" size={15} color="black" />
              </View>
              <Text>Loan</Text>
            </View>
            <View className='flex-col  justify-center gap-[5px]'>
              <View className='bg-[#d9fff5] h-[40px] w-[40px] items-center justify-center rounded-full'>
                <FontAwesome6 name="hands-holding-child" size={15} color="black" />
              </View>
              <Text>Play</Text>
            </View>
            <View className='flex-col  justify-center gap-[5px]'>
              <View className='bg-[#d9fff5] h-[40px] w-[40px] items-center justify-center rounded-full'>
                <MaterialCommunityIcons name="more" size={15} color="black" />
              </View>
              <Text>More</Text>
            </View>
            
          </View>
        </View>

        <View className='flex-row gap-[15px] mt-[20px] bg-white w-[86vw] h-[9vh] px-[20px] items-center rounded-xl '>
          <View className='bg-[#d9fff5] h-[40px] w-[40px] items-center justify-center rounded-full border-2 border-[#1bd09f]'>
          <Ionicons name="megaphone-outline" size={24} color="black" />
          </View>
          <View>
            <Text className='font-bold'>Cash up for grabs!</Text>
            <Text className='text-[11px]'>Invite friends and win up to #4,200 cash</Text>
          </View>
        </View>

        <View className='flex-row items-center justify-center gap-[26px] bg-white w-[100vw] h-[7vh] mt-[125px]'>
          <View className='flex-col items-center gap-[5px]'>
            <View>
            <Ionicons name="home-outline" size={15} color="black" />
            </View>
            <Text>Home</Text>
          </View>
          <View className='flex-col items-center gap-[5px]'>
            <View>
              <EvilIcons name="trophy" size={18} color="black" />
            </View>
            <Text>Rewards</Text>
          </View>
          <View className='flex-col items-center gap-[5px]'>
            <View>
              <MaterialCommunityIcons name="finance" size={15} color="black" />
            </View>
            <Text>Finance</Text>
          </View>
          <View className='flex-col items-center gap-[5px]'>
            <View>
              <AntDesign name="creditcard" size={15} color="black" />
            </View>
            <Text>Cards</Text>
          </View>
          <View className='flex-col items-center gap-[5px]'>
            <View>
              <AntDesign name="meh" size={15} color="black" />
            </View>
            <Text>Me</Text>
          </View>
        </View>
    
    </View>
  );
}


