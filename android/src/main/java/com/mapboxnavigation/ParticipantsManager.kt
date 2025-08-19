package com.yourpackage.participants

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.WritableArray
import com.facebook.react.modules.core.DeviceEventManagerModule

class ParticipantsManager(private val context: ReactApplicationContext) :
        ReactContextBaseJavaModule(context) {

    companion object {
        var shared: ParticipantsManager? = null
    }

    private var participants: List<Map<String, Any>> = emptyList()

    init {
        shared = this
    }

    override fun getName(): String = "ParticipantsManager"

    @ReactMethod
    fun updateParticipants(list: List<Map<String, Any>>) {
        participants = list

        val array: WritableArray = Arguments.createArray()
        list.forEach { map ->
            val writableMap = Arguments.makeNativeMap(map)
            array.pushMap(writableMap)
        }

        sendEvent("onParticipantsUpdate", array)
    }

    private fun sendEvent(eventName: String, data: Any) {
        context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                .emit(eventName, data)
    }

    fun getParticipants(): List<Map<String, Any>> = participants
}
